import React, { useContext } from 'react'
import { GlobalContext, GlobalProvider } from '../../../context/GlobalState'
import MovieCard  from '../MovieCard/MovieCard';
import '../Watched/Watched.css'

const Watched = () => {
    const {watched} = useContext(GlobalContext);
    return (
        <div className="movie-page">
        <div className="container">
            <div className="header">
                <h1 className="heading">Watched Movies</h1>
                <span className="count-pill">{watched.length} {watched.length ===1 ? 'Movie': 'Movies'} </span>

            </div>
            {watched.length > 0 ? (
                <div className="movie-grid">
                    {watched.map((movie) => (
                        <MovieCard movie={movie} type="watched" />
                    ))}
                </div>
            ) : (
            <h1 className="no-movies">No Movie in the Watched List</h1>
            )}

        </div>
    </div>
    )
}

export default Watched
