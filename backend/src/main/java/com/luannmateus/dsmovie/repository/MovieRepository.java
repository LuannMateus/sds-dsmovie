package com.luannmateus.dsmovie.repository;

import com.luannmateus.dsmovie.entities.Movie;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
}
