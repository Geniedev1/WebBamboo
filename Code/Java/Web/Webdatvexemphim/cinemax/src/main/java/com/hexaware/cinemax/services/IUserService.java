package com.hexaware.cinemax.services;

import com.hexaware.cinemax.dto.UserDTO;
import com.hexaware.cinemax.entities.User;

public interface IUserService {

    UserDTO createUser(UserDTO userDTO);

    User getUserById(int userId);

	User authenticateUser(String username, String password);
    void forgotPassword(String email);
    // Add more methods as needed for updating, deleting, or retrieving users
}
