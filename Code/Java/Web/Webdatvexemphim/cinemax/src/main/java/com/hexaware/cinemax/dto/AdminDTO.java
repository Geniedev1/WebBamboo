package com.hexaware.cinemax.dto;
public class AdminDTO {

    // Remove the adminId field
    private String adminName;
    private String adminUsername;
    private String adminPassword;

    public AdminDTO() {
        // Default constructor
    }

    public AdminDTO(String adminName, String adminUsername, String adminPassword) {
        this.adminName = adminName;
        this.adminUsername = adminUsername;
        this.adminPassword = adminPassword;
    }

    // Remove the getAdminId and setAdminId methods

    public String getAdminName() {
        return adminName;
    }

    public void setAdminName(String adminName) {
        this.adminName = adminName;
    }

    public String getAdminUsername() {
        return adminUsername;
    }

    public void setAdminUsername(String adminUsername) {
        this.adminUsername = adminUsername;
    }

    public String getAdminPassword() {
        return adminPassword;
    }

    public void setAdminPassword(String adminPassword) {
        this.adminPassword = adminPassword;
    }

    @Override
    public String toString() {
        return "AdminDTO [adminName=" + adminName +
                ", adminUsername=" + adminUsername + ", adminPassword=" + adminPassword + "]";
    }
}
