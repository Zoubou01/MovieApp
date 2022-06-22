import React, { useState } from "react";
import { Alert, Button, ButtonGroup } from "reactstrap";
import MovieList from "../Components/MovieList";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  // Radio Buttons

  const isSelected = (value: string): boolean => selectedRadioBtn === value;
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSelectedRadioBtn(e.currentTarget.value);

  const [selectedRadioBtn, setSelectedRadioBtn] = useState("movie");

  // Sort buttons
  const isSortSelected = (value: string): boolean => selectedSortBtn === value;
  const handleSortClick = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSelectedSortBtn(e.currentTarget.value);
  const [selectedSortBtn, setSelectedSortBtn] = useState("YearDesc");

  // Search Bar
  const [searchValue, setSearchValue] = useState("");
  // Request MovieList
  const [movies, setMovies] = useState([] as any[]);

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=4ca0e358&type=${selectedRadioBtn}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  const sortAlphabeticallyAsc = () => {
    const newData = movies.sort((a, b) => {
      const sorted = "AlphabeticallyAsc";
      const makeReverse = sorted === "AlphabeticallyAsc" ? 1 : -1;
      return makeReverse * a.Title.localeCompare(b.Title);
    });
    setMovies(newData);
  };
  const sortAlphabeticallyDesc = () => {
    const sorted = "AlphabeticallyDesc";
    const newData = movies.sort((a, b) => {
      const makeReverse = sorted === "AlphabeticallyDesc" ? -1 : 1;
      return makeReverse * a.Title.localeCompare(b.Title);
    });
    setMovies(newData);
  };

  const sortYearAsc = () => {
    const sorted = "YearAsc";
    const newData = movies.sort((a, b) => {
      const makeReverse = sorted === "YearAsc" ? 1 : -1;
      return makeReverse * a.Year.localeCompare(b.Year);
    });
    setMovies(newData);
  };
  const sortYearDesc = () => {
    const newData = movies.sort((a, b) => {
      const sorted = "YearDesc";
      const makeReverse = sorted === "YearDesc" ? -1 : 1;
      return makeReverse * a.Year.localeCompare(b.Year);
    });
    setMovies(newData);
  };

  return (
    
    <div className="Btns">
      <ButtonGroup>
      <Button color="dark">
      <input
        type="checkbox"
        name="react-radio-btn"
        value="movie"
        checked={isSelected("movie")}
        onChange={handleRadioClick}
      />
      Movies
      </Button>
      <Button color="dark" >
      <input
        type="checkbox"
        name="react-radio-btn"
        value="series"
        checked={isSelected("series")}
        onChange={handleRadioClick}
      />
      Series
      </Button>
        <Button color="danger" >
      <input
        className="searchBar"
        type="text"
        placeholder="Looking For Something?"
        onChange={(event) => setSearchValue(event.target.value)}
      />
      </Button>
      
      <Button color="danger" onClick={getMovieRequest}>
        Search
      </Button>
      
      <Button color="dark">
      <input
        type="checkbox"
        name="react-sort-btn"
        value="AlphabeticallyAsc"
        checked={isSortSelected("AlphabeticallyAsc")}
        onChange={handleSortClick}
        onClick={() => sortAlphabeticallyAsc()}
      />
      AlphabeticallyAsc
      </Button>
      <Button color="dark">
      <input
        type="checkbox"
        name="react-sort-btn"
        value="AlphabeticallyDesc"
        checked={isSortSelected("AlphabeticallyDesc")}
        onChange={handleSortClick}
        onClick={() => sortAlphabeticallyDesc()}
      />
      AlphabeticallyDesc
      </Button>
      <Button color="dark">
      <input
        type="checkbox"
        name="react-sort-btn"
        value="YearAsc"
        checked={isSortSelected("YearAsc")}
        onChange={handleSortClick}
        onClick={() => sortYearAsc()}
      />
      YearAsc
      </Button>
      <Button color="dark">
      <input
        type="checkbox"
        name="react-sort-btn"
        value="YearDesc"
        checked={isSortSelected("YearDesc")}
        onChange={handleSortClick}
        onClick={() => sortYearDesc()}
      />
      YearDesc
      </Button>
      </ButtonGroup>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
