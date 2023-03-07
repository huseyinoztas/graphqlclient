import { gql } from '@apollo/client';



export const GET_EVENT = gql`
  query getEvent($id: ID!) {
    event(id: $id) {
      id
      title
      desc
      date
      from
      to
      location {
        name
        desc
      }
    }
  }
`;

export const GET_USERS = gql`
  query {
    users {
      id
      username
    }
  }
`;

// Fragment
const participantsFragment = gql`
  fragment ParticipantsFragment on Participant {
    user {
      username
      email
    }
  }
`;

export const GET_PARTICIPANTS = gql`
  query ($id: ID!) {
    event(id: $id) {
      participants {
        ...ParticipantsFragment
      }
    }
  }
  ${participantsFragment}
`;



export const NEW_PARTICIPANT = gql`
  mutation addParticipant($data: createParticipant!) {
    addParticipant(data: $data) {
      id
    }
  }
`;


// Fragment
const eventsFragment = gql`
  fragment EventsFragment on Event {
    id
    title
    desc
  }
`;

export const GET_EVENTS = gql`
  query GetEvents {
    events {
      ...EventsFragment
    }
  }
  ${eventsFragment}
`;




export const GET_LOCATIONS = gql`
  query {
    locations {
      id
      name
    }
  }
`;

export const NEW_EVENT = gql`
  mutation createEvent($data: createEvent!) {
    addEvent(data: $data) {
      id
      title
    }
  }
`;

