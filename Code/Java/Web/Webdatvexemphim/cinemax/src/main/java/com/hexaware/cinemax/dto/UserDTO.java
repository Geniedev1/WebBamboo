// UserDTO.java (DTO)
package com.hexaware.cinemax.dto;

public class UserDTO {
	

    private String username;
    private String email;
    private String password;

    public UserDTO() {
        // Default constructor
    }

    public UserDTO(String username, String email,String password) {
        this.username = username;
        this.email = email;
        this.password=password;
    }

    // Getters and setters for all fields

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
    
}
