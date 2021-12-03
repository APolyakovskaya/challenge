import React from 'react';
import { useRouter } from 'next/router';
import { gql, useQuery  } from "@apollo/client";

import { getData as getData } from '../api/dataApi';
import MainContainer from '../components/MainContainer';

const GET_LONG_TAILS = gql`
    query MyQuery {
        long_tails {
            json_id
            tail
        }
    }
`;

export default function({ jsonData }) {
    const {data, loading} = useQuery(GET_LONG_TAILS);
    const {query, isFallback} = useRouter();
    if(loading || isFallback) {
        return (
            <MainContainer>
                <h1>Loading...</h1>
            </MainContainer>
        );
    };

    const tail = data.long_tails.find(el => el.tail === query.tail);
    const { title, description } = jsonData.find(el => el.id === tail.json_id)
    return (
        <MainContainer>
            <h1>{title}</h1>
            <h2>{description}</h2>
        </MainContainer>
    );
};

export async function getStaticProps() {
    let jsonData;

    try {
        jsonData = await getData()
    } catch(err) {
        console.error(err)
    }

    return { props: { jsonData: jsonData || null } };
};

export async function getStaticPaths() {
    return {
        paths: ['/best-hello-ever', '/best-hello-world-ever', '/best-world-ever'],
        fallback: true,
    };
};
