import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import PeopleViewer from './components/PeopleViewer';

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <>
    <ApolloProvider client={client}>
      <PeopleViewer/>
    </ApolloProvider>
    </>
  )
}

export default App
