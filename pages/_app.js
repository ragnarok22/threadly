import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

let persistor = persistStore(store)

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <ThemeProvider attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
