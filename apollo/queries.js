import {gql} from "@apollo/client";

const GET_QUEUES = gql`
  query queues {
    queues {
      id
      createdAt
      updatedAt
      tweets
      pubDate
    }
  }`

export { GET_QUEUES }
