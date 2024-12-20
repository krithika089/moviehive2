import React from "react";


const MovieCard = ({path,title,desc,IMDB_rating,release_date}) => {
    return( 
      <>
      <table>
        <thead>
        
        </thead>
        <tbody className="Table_content">
          <tr>
                            <td>
                                <img 
                                    src={`https://image.tmdb.org/t/p/w500${path}`} 
                                    className="movie_poster" 
                                    alt="Movie Poster"
                                />
                            </td>
                            <td>
                                {title}
                                <p className="movie_desc">{desc}</p>
                            </td>
                            <td>{IMDB_rating}</td>
                            <td>{release_date}</td>
          </tr>
        </tbody>
      </table>
      </>
    );
}
export default MovieCard;