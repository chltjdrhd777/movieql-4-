let movies = [
  {
    name: "Star wars",
    score:1,
    id: 0,
  },
  {
    name: "Avengers",
    score:8,
    id: 1,
  },
  {
    name: "The Legend",
    score:10,
    id: 2,
  },
];

export const getMovies = () => movies

export const getByID = (id) => {
  const filtedMovie = movies.filter((everyMovie) => id === everyMovie.id);
  return filtedMovie[0];
};

export const deleteMovie = (id) =>{
  const cleanedMovie = movies.filter(everyMovies => everyMovies.id !==id)
  if(movies.length > cleanedMovie.length){
    movies = cleanedMovie;
    return true;
  }else {
    return false;
  }
}

export const addMovie = (name,score) =>{
  const newMovie = {
    name,
    score,
    id: movies.length + 1
  }
  movies.push(newMovie)
  return newMovie
}