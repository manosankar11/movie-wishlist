import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import '../MovieControl/MovieControl.css'

const MovieControls = ({ movie, type }) => {
    const { removeMovieFromWatchlist, addMovieToWatched, moveToWatchedlist, removeFromWatched, } = useContext(GlobalContext)
    return (
        <div className="inner-card-controls">
            {type === "watchlist" && (
                <>
                    <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)} >
                        <i className="fa-fw far fa-eye"></i>
                    </button>
                    <button className="ctrl-btn" onClick={() => removeMovieFromWatchlist(movie.id)}>
                        <i className="fa-fw fa fa-times"></i>
                    </button>

                </>
            )}
            {type === 'watched' &&
                (
                    <>
                        <button className="ctrl-btn" onClick={() => moveToWatchedlist(movie)} >
                            <i className="fa-fw far fa-eye-slash"></i>
                        </button>
                        <button className="ctrl-btn" onClick={() => removeFromWatched(movie.id)}>
                            <i className="fa-fw fa fa-times"></i>
                        </button>
                    </>
                )
            }
        </div>
    )
}

export default MovieControls
