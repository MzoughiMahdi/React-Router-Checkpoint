import React,{useState} from "react";
import { v4 as uuidv4 } from "uuid";
import ReactStars from "react-rating-stars-component";
import { Form, FormControl } from "react-bootstrap";

import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

import AddMovie from "../AddMovie/AddMovie";


function MovieList({
    titleSearch,
    rateSearch,
    setNewMovie,
    newMovie
    
}) {
    const [TitleSearch, setTitleSearch] = useState("");
    const [RateSearch, setRateSearch] = useState("");

    const[newMovieData,setNewMovieData] =useState({
        id:uuidv4(),
        Title: "",
        Description: "",
        PosterUrl: "",
        TrailerUrl:"",
        Rating: 0,
    })
    
    return (
        <>
        <Form inline id="searchInput">
      <FormControl
          id="searchNav"
            type="text"
            placeholder="Search"
            className="mr-sm-2"
         
            onChange={(event) => 
              setTitleSearch(event.target.value)
             }
        />
        <ReactStars
            count={5}
            onChange={setRateSearch}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
        />
    </Form>
    
        <div className="movielist">
            {newMovie.filter((movie)=> movie.Title.toLowerCase().includes(TitleSearch.toLowerCase())).map((val, i) => (
                <div key={i}>
                    <MovieCard newMovie={val} />{" "}
                </div>
            ))}
            

         {    <AddMovie
                newMovie={newMovie}
                newMovieData={newMovieData}
                setNewMovie={setNewMovie}
                setNewMovieData={setNewMovieData}
            /> }
        </div>
        </>
    );
    
}

export default MovieList;
