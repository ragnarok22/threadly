import gql from "@apollo/client";

const TWITTER_LOGIN = gql`
  mutation twitterLogin ($text: String!) {
    twitterLogin(callbackUrl: $text) {
      status
      url
      oauthToken
    }
  }`;

  export { TWITTER_LOGIN }