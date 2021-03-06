import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_HOST,
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret': process.env.NEXT_PUBLIC_ADMIN_SECRET,
    },
});

export default client;