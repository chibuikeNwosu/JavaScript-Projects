"use Strict";

// Movie List Manager.

// Understand the project - ask the right questions.
/* - How i'm i meant to add movies based on their title, genre and rattings ?
   - How i'm i meant to format the list of movies? what does it even mean.
   - What do they mean by filter movies by minimum ratings.  
*/

const movie1 = {
  title: "Toy Story",
  genre: "Comedy & Romance",
  rating: 4,
};

const movies = [];

function addMovies(movie) {
  const user_request = "add";

  if (user_request === "add") {
    movies.push(movie);
    console.log(`${movie.title} has been added to the list`);
  } else {
    console.log("Invalid");
  }
}

const displayMovies = () => {
  const user_request = "displayMovies";

  for (let i = 0; i < movies.length; i++) {
    if (user_request === "displayMovies") {
      console.log(
        `Title: ${movies[i].title}\n Genre: ${movies[i].genre}\n Rating: ${movies[i].rating}  `
      );
    }
  }
};

function filterMovies(userRating) {
  const meetCriteria = 5;

  if (userRating === meetCriteria) {
    return "This movie is A.Okay";
  } else {
    return "This movie needs to be worked on";
  }
}

addMovies(movie1);
displayMovies();
console.log(filterMovies(5));
// TODO just make it more professinal.
