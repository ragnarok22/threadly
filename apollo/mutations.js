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

const CONFIRM_TRANSACTION = gql`
mutation confirmTransaction($token: String!, $remoteId: String!, $transactionUuid: String!) {
  confirmTransaction(token: $token, remoteId: $remoteId, transactionUuid: $transactionUuid) {
    status
  }
}`

const CANCEL_TRANSACTION = gql`
mutation cancelTransaction($token: String!, $remoteId: String!) {
  cancelTransaction(token: $token, remoteId: $remoteId) {
    status
  }
}`

const DELETE_THREAD = gql`
mutation deleteThread($threadId: Int!) {
  deleteThread(threadId: $threadId) {
    status
  }
}`

export {
  TWITTER_LOGIN,
  TWITTER_TOKEN,
  TWITTER_TWEET,
  SCHEDULE_THREAD,
  CREATE_INVOICE,
  CONFIRM_TRANSACTION,
  CANCEL_TRANSACTION,
  DELETE_THREAD,
}