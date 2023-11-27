// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const dirArray = moviesArray.map(currentMovie => currentMovie.director);
    return dirArray;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {    
  const drama = moviesArray.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
  return drama.length;  
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) {
        return 0;
    }
    const scoreSum = moviesArray.reduce((accumulator, currentMovie) => {
        const movieScore = currentMovie.score || 0;
        return accumulator + movieScore;
    }, 0);
    const scoreAvg = scoreSum / moviesArray.length;
    return Math.round(scoreAvg * 100) / 100;
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => {
        return movie.genre.includes('Drama');
    });
    return Math.round(scoresAverage(dramaMovies) * 100) / 100;
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = moviesArray.toSorted((nameA, nameB) => {
      if (nameA.year === nameB.year) {
        return nameA.title.localeCompare(nameB.title);
      }
      return nameA.year - nameB.year;
    });  
    return sortedMovies;
  }



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titles = moviesArray.map((movie) => movie.title);
    const sortedTitles = titles.toSorted((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
    return 0;
  });
  return sortedTitles.slice(0, 20);
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
