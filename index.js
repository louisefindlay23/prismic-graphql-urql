import { client } from './prismicio.js'

const query = `query {
  _allDocuments {
    edges {
      node {
        _meta {
          id
          uid
          type
        }
      }
    }
  }
} 
`;

client
  .query(query)
  .toPromise()
  .then(result => {
    console.log(result.data._allDocuments);
  });
