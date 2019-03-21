/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies) {
  return movies.map(movie => {
    let split = movie.duration.split(' ') // Possible value: ["2h", "7min"]
    let duration = 0
    for (let i = 0; i < split.length; i++) {
      if (split[i].includes('h')) {
        duration += 60 * Number(split[i].substr(0, split[i].length-1))
      }
      if (split[i].includes('min')) {
        duration += Number(split[i].substr(0, split[i].length-3))
      }
    }
    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: duration,
      genre: movie.genre,
      rate: movie.rate
    }
  })
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
  if (movies.length === 0) 
    return undefined
  let rates = movies.map(movie=>Number(movie.rate)) // Example: [9.3,9.2,9.0]
  let sum = rates.reduce((a,b)=>a+b, 0)
  let average = sum / movies.length
  let averageWith2Decimals = Math.round(100 * average) / 100
  return averageWith2Decimals

  // // Other solution
  // return movies.reduce((curSum,movie)=>curSum+Number(movie.rate),0) / movies.length
}


// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let dramaMovies = movies
    .filter(movie=> movie.genre.includes('Drama'))
  return ratesAverage(dramaMovies)
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
