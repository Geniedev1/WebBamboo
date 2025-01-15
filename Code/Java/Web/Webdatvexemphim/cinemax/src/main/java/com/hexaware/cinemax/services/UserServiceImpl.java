// UserServiceImpl.java (Service Implementation)
package com.hexaware.cinemax.services;

import com.hexaware.cinemax.dto.UserDTO;
import com.hexaware.cinemax.entities.User;
import com.hexaware.cinemax.repositories.UserRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDTO createUser(UserDTO userDTO) {
        User newUser = new User();
        newUser.setUsername(userDTO.getUsername());
        newUser.setEmail(userDTO.getEmail());
        newUser.setPassword(userDTO.getPassword());

        User savedUser = userRepository.save(newUser);

        return new UserDTO( savedUser.getUsername(), savedUser.getEmail(),savedUser.getPassword());
    }

    @Override
    public User getUserById(int userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return user;
    }
    @Override
    public User authenticateUser(String username, String password) {
        User user = userRepository.findByUsername(username);

        if (user == null || !user.getPassword().equals(password)) {
            throw new RuntimeException("Invalid username or password");
        }

        return user;
    }
    @Autowired
    private EmailService emailService;

    @Override
    public void forgotPassword(String email) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new RuntimeException("User not found");
        }

        // Generate a new password or reset link (for simplicity, we'll generate a new password)
        String newPassword = UUID.randomUUID().toString().substring(0, 8);
        user.setPassword(newPassword);
        userRepository.save(user);

        // Send the new password to the user's email
        emailService.sendEmail(user.getEmail(), "Password Reset", "Your new password is: " + newPassword);
    }




}