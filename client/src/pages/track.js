import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../components";

const Track = () => {
  const { trackId } = useParams();
  return (
    <Layout>
      <p>{trackId}</p>
    </Layout>
  );
};

export default Track;
