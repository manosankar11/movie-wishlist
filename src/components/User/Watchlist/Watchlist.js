import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import MovieCard from '../MovieCard/MovieCard'


const Watchlist = () => {
    const { watchlist } = useContext(GlobalContext)

    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">My WatchList</h1>
                    <span className="count-pill">{watchlist.length} {watchlist.length ===1 ? 'Movie': 'Movies'} </span>
                </div>
                {watchlist.length > 0 ? (
                    <div className="movie-grid">
                        {watchlist.map((movie) => (
                            <MovieCard movie={movie} type="watchlist" />
                        ))}
                    </div>
                ) : (
                    <h1 className="no-movie">No movie in the watchlist</h1>
                )}

            </div>
        </div>
    )
}

export default Watchlist
