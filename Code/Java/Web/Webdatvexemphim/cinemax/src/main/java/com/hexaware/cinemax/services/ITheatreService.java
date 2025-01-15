package com.hexaware.cinemax.services;

import com.hexaware.cinemax.dto.TheatreDTO;

import java.util.List;

public interface ITheatreService {

    TheatreDTO addTheatre(TheatreDTO theatreDTO);

    List<TheatreDTO> getAllTheatres();

    void removeTheatreById(int id);

    void removeTheatreByName(String name);

    TheatreDTO getTheatreByName(String theatreName);

}
