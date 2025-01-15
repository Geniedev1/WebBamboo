package com.hexaware.cinemax.services;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.cinemax.dto.AdminDTO;
import com.hexaware.cinemax.entities.Admin;
import com.hexaware.cinemax.repositories.AdminRepository;

@Service
public class AdminServiceImpl implements IAdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Override
    public void addAdmin(AdminDTO adminDTO) {
        Admin existingAdmin = adminRepository.findByAdminUsername(adminDTO.getAdminUsername());
        if (existingAdmin != null) {
            throw new RuntimeException("Admin with the given username already exists");
        }

        Admin admin = new Admin();
        admin.setAdminName(adminDTO.getAdminName());
        admin.setAdminUsername(adminDTO.getAdminUsername());
        admin.setAdminPassword(adminDTO.getAdminPassword()); // Not recommended for production

        adminRepository.save(admin);
    }

    public boolean verifyAdminCredentials(String username, String password) {
        Admin admin = adminRepository.findByAdminUsername(username);

        if (admin != null && Objects.equals(password, admin.getAdminPassword())) {
            return true; // Credentials are valid
        }

        return false; // Invalid credentials
    }

}
