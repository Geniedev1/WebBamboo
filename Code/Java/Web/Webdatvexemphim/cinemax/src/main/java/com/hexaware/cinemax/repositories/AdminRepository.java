package com.hexaware.cinemax.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexaware.cinemax.entities.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {
    Admin findByAdminUsername(String adminUsername);
    // You may need additional methods based on your requirements
}
