import react, { useState, useEffect } from "react";
import { Card, CardBody, CardGroup, CardImg, CardText, CardTitle } from "reactstrap";
import { Movie } from "./movie";

interface PropTypes {
  movies: Movie[];
}

const MovieList: React.FC<PropTypes> = ({ movies }) => {
  return (
    <>
      {movies?.map((movie, index) => (
        // !!!!!!!
        // <div key={index} onClick={<a href="http://localhost:3000/details"} >
          <CardGroup>
          <Card color="dark" >
        <a href={"http://localhost:3000/details/" + movie.imdbID} key={index}>
          {/* <h1>{movie.Title}</h1> */}
          <img alt={movie.Title} src={movie.Poster} width="20%"/>
          <CardBody>
            <CardTitle tag="h5">
              {movie.Title}
            </CardTitle>
            <CardText>
              PressForDetails
            </CardText>
            </CardBody>
        </a>
        </Card>
        </CardGroup>
      ))}
    </>
  );
};

export default MovieList;
