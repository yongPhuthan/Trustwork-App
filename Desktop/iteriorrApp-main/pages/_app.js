import Layout from '../components/Layout';
import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';
import { SnackbarProvider } from 'notistack';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { SessionProvider } from 'next-auth/react';

const clientSideEmotionCache = createCache({ key: 'css' });

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <>             
     <SessionProvider session={session}>
      <CacheProvider value={emotionCache}>
        <SnackbarProvider
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <StoreProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </StoreProvider>
        </SnackbarProvider>
      </CacheProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
