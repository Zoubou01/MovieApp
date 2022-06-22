import React, { useEffect, useState } from "react";
import DetailsList from "../Components/DetailsList";
import { useParams } from "react-router-dom";
import Details from "../Components/details";

const DetailsPage = () => {
  const { imdbID } = useParams<{ imdbID: string }>();

  const [detailed, setDetailed] = useState<undefined | Details>(undefined);

  const getDetailsRequest = async () => {
    const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=4ca0e358`;

    const responseDetailed = await fetch(url);
    const responseDetailedJson = await responseDetailed.json();

    if (responseDetailedJson) {
      setDetailed(responseDetailedJson);
    }
  };

  useEffect(() => {
    if (imdbID) {
      getDetailsRequest();
    }
  }, []);
  return <div>{detailed ? <DetailsList details={detailed} /> : null}</div>;
};

export default DetailsPage;
