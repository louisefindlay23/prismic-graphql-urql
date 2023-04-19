import { cacheExchange, Client, fetchExchange } from "urql";
import * as prismic from '@prismicio/client'

export const repositoryName = 'onboarding-content-management'

const prismicClient = prismic.createClient(repositoryName,
  {
    accessToken:
      'MC5aQ3c3QXhBQUFDUUE5SGx1.BVDvv73vv73vv719bQfvv73vv70E77-9Qu-_ve-_ve-_ve-_ve-_ve-_ve-_ve-_ve-_ve-_vSzvv71cZ0sm77-977-977-9',
  }
)

export const client = new Client({
  url: prismic.getGraphQLEndpoint(repositoryName),
  exchanges: [cacheExchange, fetchExchange],
  fetch: prismicClient.graphQLFetch,
  preferGetMethod: true,
});