import { useState, useEffect } from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import UserInfo from '../components/UserInfo.tsx';
import NewTimer from '../components/NewTimer.tsx';
import { timersByUsername } from '../src/graphql/queries';
import { deleteTimer, createTimer } from '../src/graphql/mutations';
import { onCreateTimer, onDeleteTimer } from '../src/graphql/subscriptions';
import Timer from '../components/Timer.tsx';

function Home() {
  const [timers, setTimers] = useState([]);
  const [activeDuration, setActiveDuration] = useState(-1);

  const [user, setUser] = useState(null);

  const fetchTimers = async () => {
    if (user) {
      const timerData = await API.graphql({
        query: timersByUsername,
        variables: { username: user.username },
      });
      setTimers(timerData.data.timersByUsername.items);
    }
  };

  useEffect(fetchTimers, [user]);

  useEffect(async () => {
    const authenticatedUser = await Auth.currentAuthenticatedUser();
    setUser(authenticatedUser);
    const onCreateSub = API.graphql(
      graphqlOperation(onCreateTimer, { username: authenticatedUser.username }),
    );
    onCreateSub.subscribe({
      next: fetchTimers,
    });
    const onDeleteSub = API.graphql(
      graphqlOperation(onDeleteTimer, { username: authenticatedUser.username }),
    );
    onDeleteSub.subscribe({
      next: fetchTimers,
    });
    return () => {
      onDeleteSub.unsubscribe();
      onCreateSub.unsubscribe();
    };
  }, []);

  const removeTimer = ({ id }) => {
    API.graphql({
      query: deleteTimer,
      variables: { input: { id } },
      // @ts-ignore
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    });
  };
  if (!user) return null;
  return (
    <div>
      <UserInfo username={user.username} />
      <Timer activeDuration={activeDuration} />
      <h1 className="text-3xl font-semibold tracking-wide mt-6 mb-2">Timers</h1>
      {
        timers.map((timer) => (
          <div key={timer.id} className="flex justify-between border-b border-gray-300 mt-8 pb-4">
            <span className="text-xl font-semibold">
              {`${timer.name} (${timer.duration / 1000}s)`}
            </span>
            <div className="space-x-4">
              <button
                onClick={() => { setActiveDuration(timer.duration); }}
                type="button"
                className="mb-4 bg-green-400 text-white font-semibold px-8 py-2"
              >
                Start
              </button>
              <button
                onClick={() => { removeTimer(timer); }}
                type="button"
                className="mb-4 bg-red-400 text-white font-semibold px-8 py-2"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      }
      <NewTimer createTimer={createTimer} />
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(Home);
