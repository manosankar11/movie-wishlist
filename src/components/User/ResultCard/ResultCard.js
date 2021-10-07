import React, { useContext } from 'react'
import { GlobalContext } from '../../../../src/context/GlobalState'
import '../ResultCard/ResultCard.css'

const ResultCard = ({ movie }) => {
    const { addMovieToWatchlist,addMovieToWatched,watchlist ,watched} = useContext(GlobalContext)

    let storedMovie = watchlist.find((o)=>o.id === movie.id);
    let storedMovieWatched = watched.find((o)=>o.id === movie.id);

    const watchlistDisabled = storedMovie ? true :storedMovieWatched ? true : false;
    const watchedDisabled = storedMovieWatched ? true : false;


    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
                ) : (<div className="filler-poster"></div>
                )}
            </div>
            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title}</h3>
                    <h4 className="release-date">
                        {movie.release_date ? movie.release_date.substring(0, 4) : "---"}
                    </h4>
                    <h3 className="rating">{movie.vote_average} /10</h3>
                </div>
                <div className="controls">
                    <button className="btn" disabled={watchlistDisabled} onClick={() => addMovieToWatchlist(movie)} >Add to watchlist</button>
                    <button className="btn" disabled={watchedDisabled} onClick={() => addMovieToWatched(movie)} >Add to watched</button>

                </div>
            </div>
        </div>
    )
}

export default ResultCard
