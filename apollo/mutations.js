import {gql} from "@apollo/client";

const TWITTER_LOGIN = gql`
mutation twitterLogin ($text: String!) {
  twitterLogin(callbackUrl: $text) {
    status
    url
    oauthToken
  }
}`

const TWITTER_TOKEN = gql`
mutation tokenAuth($token: String!, $verifier: String!) {
  tokenAuth (requestToken: $token, oauthVerifier: $verifier) {
    status
    token
    user {
      firstName
      username
      imageUrl
      bannerUrl
    }
  }
}`

const TWEETER_TWEET = gql`
mutation tweet($tweets: String!) {
  tweet(tweets: $tweets) {
    status
  }
}`

export { TWITTER_LOGIN, TWITTER_TOKEN, TWEETER_TWEET }