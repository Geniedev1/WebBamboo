package com.hexaware.cinemax.services;

import com.hexaware.cinemax.dto.AdminDTO;

public interface IAdminService {
    void addAdmin(AdminDTO adminDTO);

   public boolean verifyAdminCredentials(String username, String password);
}
