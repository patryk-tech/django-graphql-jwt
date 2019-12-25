import VueApollo from 'vue-apollo';

import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:10233/graphql/',
});

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

// "async" is optional
export default async ({ app, Vue }) => {
  Vue.use(VueApollo);
  app.apolloProvider = new VueApollo(apolloProvider);
};
