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
      isPremium
    }
  }
}`

const TWITTER_TWEET = gql`
mutation tweetPost($thread: [String]!) {
  tweetPost(thread: $thread) {
    status
    tweetUrl
  }
}`

const SCHEDULE_THREAD = gql`
mutation scheduleThread($tweets: [String]!, $pubDate: DateTime!) {
  scheduleThread(tweets: $tweets, pubDate: $pubDate) {
    status
  }
}`

const CREATE_INVOICE = gql`
mutation createInvoice($billingType: String!) {
  createInvoice(billingType: $billingType) {
    url
  }
}`

export { TWITTER_LOGIN, TWITTER_TOKEN, TWITTER_TWEET, SCHEDULE_THREAD, CREATE_INVOICE }