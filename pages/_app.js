import '../styles/globals.css'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'next-themes'
import client from '../apollo-client'
import store from '../redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  )
}

export default MyApp
