package com.hexaware.cinemax.repositories;

import com.hexaware.cinemax.entities.Show;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShowRepository extends JpaRepository<Show, Integer> {

	List<Show> findByMovie_Title(String movieName);

}
