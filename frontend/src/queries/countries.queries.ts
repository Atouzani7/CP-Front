import { gql } from "@apollo/client";

export const LIST_ADS_BY_CATEGORY_ID = gql`
  query ListCountries($FindCountryById: String!, $offset: Float, $limit: Float) {
    ListCountries(id: $FindCountryById, offset: $offset, limit: $limit) {
      count
      ListCountries {
        id
        name
        emoji
      }
    }
  }
`;

export const FIND_AD_BY_ID = gql`
  query FindCountryById($FindCountryById: String!) {
    FindCountryById(id: $FindCountryById) {
      name
      emoji
      continent
    }
  }
`;