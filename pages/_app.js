import '../styles/globals.css';

/** Amplify */
import Amplify from 'aws-amplify';
import config from '../src/aws-exports';

Amplify.configure(config);

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="p-8">
        { /* eslint-disable-next-line react/jsx-props-no-spreading */ }
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
