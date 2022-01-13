package com.luannmateus.dsmovie.repository;

import com.luannmateus.dsmovie.entities.Score;
import com.luannmateus.dsmovie.entities.ScorePK;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
