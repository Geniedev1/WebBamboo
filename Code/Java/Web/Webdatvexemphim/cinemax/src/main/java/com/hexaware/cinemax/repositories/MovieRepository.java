package com.hexaware.cinemax.repositories;

import com.hexaware.cinemax.entities.Movie;


import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Integer> {

	Movie findByTitle(String name);
}
