package com.hexaware.cinemax.services;

import com.hexaware.cinemax.dto.TheatreDTO;
import com.hexaware.cinemax.entities.Theatre;
import com.hexaware.cinemax.repositories.TheatreRepository;

import jakarta.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TheatreServiceImpl implements ITheatreService {

    @Autowired
    private TheatreRepository theatreRepository;

    @Override
    public TheatreDTO addTheatre(TheatreDTO theatreDTO) {
        Theatre newTheatre = new Theatre();
        newTheatre.setName(theatreDTO.getName());
        newTheatre.setLocation(theatreDTO.getLocation());
        newTheatre.setNumberOfRows(theatreDTO.getNumberOfRows());
        newTheatre.setNumberOfColumns(theatreDTO.getNumberOfColumns());

        Theatre savedTheatre = theatreRepository.save(newTheatre);

        return new TheatreDTO(
                savedTheatre.getName(),
                savedTheatre.getLocation(),
                savedTheatre.getNumberOfRows(),
                savedTheatre.getNumberOfColumns()
        );
    }
    @Override
    public TheatreDTO getTheatreByName(String theatreName) {
        Theatre theatre = theatreRepository.findByName(theatreName);

        if (theatre != null) {
            return convertToDTO(theatre);
        } else {
            throw new EntityNotFoundException("Theatre not found with name: " + theatreName);
        }
    }


    @Override
    public List<TheatreDTO> getAllTheatres() {
        return theatreRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public void removeTheatreById(int id) {
        theatreRepository.deleteById(id);
    }

    @Override
    public void removeTheatreByName(String name) {
        Theatre theatresToRemove = theatreRepository.findByName(name);
        theatreRepository.delete(theatresToRemove);
    }

    private TheatreDTO convertToDTO(Theatre theatre) {
        return new TheatreDTO(
                theatre.getName(),
                theatre.getLocation(),
                theatre.getNumberOfRows(),
                theatre.getNumberOfColumns()
        );
    }
}
