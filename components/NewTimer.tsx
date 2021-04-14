import { useState } from 'react';
import { API } from 'aws-amplify';
import { v4 as uuid } from 'uuid';

function NewTimer({ createTimer }) {
  const [timer, setTimer] = useState({ duration: '', name: '', id: '' });
  const { duration, name } = timer;
  function onChange(e) {
    setTimer(() => ({ ...timer, [e.target.name]: e.target.value }));
  }
  async function createNewPost() {
    if (!duration || !name) return;
    const id = uuid();
    timer.id = id;
    await API.graphql({
      query: createTimer,
      variables: { input: timer },
      // @ts-ignore
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    });
  }
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-wide my-6">Create a new timer</h1>
      <label className="text-lg text-gray-700" htmlFor="duration">
        <p>Duration (in seconds)</p>
        <input
          onChange={onChange}
          name="duration"
          id="duration"
          placeholder="Duration"
          value={timer.duration}
          className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
        />
      </label>
      <label className="text-lg text-gray-700" htmlFor="name">
        <p>Name</p>
        <input
          onChange={onChange}
          name="name"
          id="name"
          placeholder="Name"
          value={timer.name}
          className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
        />
      </label>
      <button
        type="button"
        className="mb-4 bg-red-400 text-white font-semibold px-8 py-2"
        onClick={createNewPost}
      >
        Create timer
      </button>
    </div>
  );
}

export default NewTimer;
