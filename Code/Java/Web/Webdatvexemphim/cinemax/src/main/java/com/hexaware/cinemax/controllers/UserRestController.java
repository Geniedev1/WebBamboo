// UserRestController.java (Controller)
package com.hexaware.cinemax.controllers;

import com.hexaware.cinemax.dto.UserDTO;
import com.hexaware.cinemax.entities.User;
import com.hexaware.cinemax.services.IUserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/api/users")
public class UserRestController {

    @Autowired
    private IUserService userService;

    @GetMapping("/welcome")
    public String hello() {
    	return "welcome";
    }
    @PostMapping
    public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) {
        UserDTO createdUser = userService.createUser(userDTO);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }   

    @GetMapping("/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable int userId) {
        User user = userService.getUserById(userId);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/authenticate/{username}/{password}")
    public ResponseEntity<User> authenticateUser(
            @PathVariable String username,
            @PathVariable String password
    ) {
        User authenticatedUser = userService.authenticateUser(username, password);
        return ResponseEntity.ok(authenticatedUser);
    }
    @PostMapping("/forgot-password")
    public ResponseEntity<String> forgotPassword(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        userService.forgotPassword(email);
        return new ResponseEntity<>("Password reset email sent", HttpStatus.OK);
    }

}
