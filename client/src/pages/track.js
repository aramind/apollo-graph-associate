import React from "react";
import { useParams } from "react-router-dom";
import { Layout, QueryResult } from "../components";
import TrackDetail from "../components/track-detail";

import { gql, useQuery } from "@apollo/client";

const GET_TRACK = gql`
  query GetTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      numberOfViews
      modules {
        id
        title
        length
      }
      description
    }
  }
`;
const Track = () => {
  const { trackId } = useParams();
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId },
  });

  console.log(data?.track?.id);
  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;
