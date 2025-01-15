package com.hexaware.cinemax.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class MovieNotFoundException extends ResponseStatusException {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public MovieNotFoundException(HttpStatus status, String msg) {
        super(status, msg);
    }
}