package com.hexaware.cinemax.repositories;

import com.hexaware.cinemax.entities.Theatre;


import org.springframework.data.jpa.repository.JpaRepository;

public interface TheatreRepository extends JpaRepository<Theatre, Integer> {

	Theatre findByName(String name);
}
