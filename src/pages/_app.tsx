import type { AppProps } from 'next/app'
import { RootLayout } from 'layouts'
import { Provider } from 'react-redux'

import store from '../store'

import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  );
}
