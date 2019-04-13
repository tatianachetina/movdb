var express = require('Express')
var router = express.Router();
var Movie = require('../models/movies.js')
var sequenceGenerator = require('./sequenceGenerator')


var getMovies = function(response) {
  Movie.find()
    .populate('group')
    .exec(function (err, movies) {
    if (err) {
        return response.status(500).json({
            title: 'An error ocured',
            error: err
        });
    }
    response.status(200).json({
      movie: 'Success',
        obj: contatcts
    });
})
}

var saveMovie = function(response, movie) {
    if (movie.group && movie.group.length > 0) {
        for (let groupMovie of movie.group) {
          groupMovie = groupMovie._id;
        }
      }
      Movie.save(function (err) {
        if (err) {
            return response.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        return getMovies(null, response)
})
}

function deleteMovie(response, movie) {
  Movie.remove(function (err) {
     if (err) {
         return response.status(500).json({
             title: 'An error occured',
             error: err
         });
     }
     return getMovies(null, response);
});
}

router.get('/', function (request, response, next) {
getMovies(response);
  });


router.post('/', function (request, response, next) {
var maxMovieId = sequenceGenerator.nextId("movies");

var movie = new Movie({
  id: maxMovieId,
  name: request.body.name,
  email: request.body.email,
  phone: request.body.phone,
  imageUrl: request.body.imageUrl
});

saveMovie(response, movie);

});

router.patch('/:id', function (request, response, next) {
  Movie.findOne({id: request.params.id}, function (err, movie) {
      if (err || !movie) {
        return response.status(500).json({
          title: 'No Movie Found!',
          error: {movie: 'Movie not found'}
        })
      }
  
      movie.name = request.body.name;
      movie.email = request.body.email;
      movie.phone = request.body.phone;
      movie.imageUrl = req.body.imageUrl;
    //   contact.group = req.body.group;

  
      saveMovie(reponses, movie)
    });
  });

router.delete("/:id", function (request, response, next){
var query = {id:request.params.id};

Movie.findOne(query, function (err, movie) {
    if (err) {
        return response.status(500).json({
            title: 'No Movie Found',
            error: err
        });
    }
    if (!movie){
        return response.status(500).json({
            title: 'No Movie Found',
            error: {movieId: request.params.id}
    });
}
deleteMovie(response, movie);
});
});

module.exports = router;