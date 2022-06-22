import React, { useState, useEffect } from "react";
import Details from "./details";

interface PropTypes {
  details: Details;
}

const DetailsList: React.FC<PropTypes> = ({ details }) => {
  return (
    <>
      {/* {details.map((details , index)=> ( */}

      <div className="detailsList">
        <img src={details.Poster} alt="movie"></img>
        <h1>{details.Title}</h1>
        <h2>{details.Year}</h2>
        <h3>{details.Rated}</h3>
        <h4>{details.Released}</h4>
        <h4>{details.Runtime}</h4>
        <h4>{details.Genre}</h4>
        <h4>{details.Director}</h4>
        <h4>{details.Writer}</h4>
        <h4>{details.Actors}</h4>
        <h4>{details.Plot}</h4>
        <h4>{details.Language}</h4>
        <h4>{details.Country}</h4>
        <h4>{details.Awards}</h4>
        <h4>{details.Metascore}</h4>
        <h4>{details.imdbRating}</h4>
        <h4>{details.imdbVotes}</h4>
        <h4>{details.imdbID}</h4>
        <h4>{details.Type}</h4>
        <h4>{details.DVD}</h4>
        <h4>{details.BoxOffice}</h4>
        <h4>{details.Production}</h4>
        <h4>{details.Website}</h4>
        <h4>{details.Response}</h4>
      </div>
      {/* ))} */}
    </>
  );
};

export default DetailsList;
