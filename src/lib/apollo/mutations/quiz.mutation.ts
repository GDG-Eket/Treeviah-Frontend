import { gql } from "@apollo/client";

export const CREATE_QUIZ = gql`
  mutation CreateQuiz($input: CreateQuizInput) {
    createQuiz(input: $input) {
      id
      title
    }
  }
`;


export const JOIN_QUIZ = gql`
  mutation JoinQuiz($input: JoinQuizInput) {
    JoinQuiz(input: $input) {
      id
      title
    }
  }
`;
