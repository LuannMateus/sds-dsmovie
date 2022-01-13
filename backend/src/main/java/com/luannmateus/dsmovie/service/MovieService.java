package com.luannmateus.dsmovie.service;

import com.luannmateus.dsmovie.dto.MovieDTO;
import com.luannmateus.dsmovie.entities.Movie;
import com.luannmateus.dsmovie.repository.MovieRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MovieService {

  @Autowired
  private MovieRepository movieRepository;

  @Transactional(readOnly = true)
  public Page<MovieDTO> findAll(Pageable pageable) {
    Page<Movie> movies = movieRepository.findAll(pageable);

    Page<MovieDTO> parsedMovies = movies.map(movie -> new MovieDTO(movie));

    return parsedMovies;
  }

  @Transactional(readOnly = true)
  public MovieDTO findById(Long id) {
    Movie movie = movieRepository.findById(id).get();

    MovieDTO parsedMovie = new MovieDTO(movie);

    return parsedMovie;
  }
}
