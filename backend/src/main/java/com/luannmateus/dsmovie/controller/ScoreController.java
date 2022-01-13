package com.luannmateus.dsmovie.controller;

import com.luannmateus.dsmovie.dto.MovieDTO;
import com.luannmateus.dsmovie.dto.ScoreDTO;
import com.luannmateus.dsmovie.service.ScoreService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/scores")
public class ScoreController {
  @Autowired
  private ScoreService scoreService;

  @PutMapping
  public MovieDTO saveScore(@RequestBody ScoreDTO scoreDTO) {
    return scoreService.saveScore(scoreDTO);
  }
}