import { Provider } from 'react-redux';
import { store } from '../app/store';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
// import { SessionProvider as AuthProvider } from 'next-auth/react';

const MyApp = ({ Component, pageProps }) => {
  return (
    // <AuthProvider session ={pageProps.session}>
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
    // </AuthProvider>
  );
};

export default MyApp;
