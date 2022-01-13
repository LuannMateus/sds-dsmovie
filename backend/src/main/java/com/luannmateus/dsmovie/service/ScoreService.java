package com.luannmateus.dsmovie.service;

import com.luannmateus.dsmovie.dto.MovieDTO;
import com.luannmateus.dsmovie.dto.ScoreDTO;
import com.luannmateus.dsmovie.entities.Movie;
import com.luannmateus.dsmovie.entities.Score;
import com.luannmateus.dsmovie.entities.User;
import com.luannmateus.dsmovie.repository.MovieRepository;
import com.luannmateus.dsmovie.repository.ScoreRepository;
import com.luannmateus.dsmovie.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ScoreService {

  @Autowired
  private MovieRepository movieRepository;

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private ScoreRepository scoreRepository;

  @Transactional
  public MovieDTO saveScore(ScoreDTO scoreDTO) {
    User user = userRepository.findByEmail(scoreDTO.getEmail());

    if (user == null) {
      user = new User();
      user.setEmail(scoreDTO.getEmail());

      user = userRepository.saveAndFlush(user);
    }

    Movie movie = movieRepository.findById(scoreDTO.getMovieId()).get();

    Score score = new Score();

    score.setMovie(movie);
    score.setUser(user);
    score.setValue(scoreDTO.getScore());

    score = scoreRepository.saveAndFlush(score);

    double sum = 0.0;
    for (Score s : movie.getScores()) {
      sum += s.getValue();
    }
    double scoreAvg = sum / movie.getScores().size();

    movie.setScore(scoreAvg);
    movie.setCount(movie.getScores().size());

    movie = movieRepository.saveAndFlush(movie);

    return new MovieDTO(movie);
  }

}
