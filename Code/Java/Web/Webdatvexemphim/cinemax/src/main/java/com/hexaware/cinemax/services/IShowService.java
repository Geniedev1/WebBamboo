package com.hexaware.cinemax.services;

import com.hexaware.cinemax.dto.ShowDTO;

import java.util.List;

public interface IShowService {

    ShowDTO addShow(ShowDTO showDTO);

    List<ShowDTO> getAllShows();

    void removeShowById(int id);

    List<ShowDTO> getAllShowsByMovieName(String movieName);

	ShowDTO getShowById(int id);

}
