package com.hexaware.cinemax.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class Admin {
 
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int adminId;
	private String adminName;
	private String adminUsername;
	private String adminPassword;
	public Admin() {
		super();
	}
	public Admin(int adminId, String adminName,String adminUsername, String password) {
		super();
		this.adminId = adminId;
		this.adminName = adminName;
		this.adminUsername = adminUsername;
		this.adminPassword = password;
	
	}
	public int getAdminId() {
		return adminId;
	}
	public void setAdminId(int adminId) {
		this.adminId = adminId;
	}
	public String getAdminName() {
		return adminName;
	}
	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}
	public String getAdminPassword() {
		return adminPassword;
	}
	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
	}
	
	@Override
	public String toString() {
		return "Admin [adminId=" + adminId + ", adminName=" + adminName + ", adminPassword=" + adminPassword + "]";
	}
	
	public String getAdminUsername() {
		return adminUsername;
	}
	public void setAdminUsername(String adminUsername) {
		this.adminUsername = adminUsername;
	}
	
	
	
}
