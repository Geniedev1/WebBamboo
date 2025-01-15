
	package com.hexaware.cinemax.repositories;

	import com.hexaware.cinemax.entities.User;
	import org.springframework.data.jpa.repository.JpaRepository;

	public interface UserRepository extends JpaRepository<User, Integer> {


	    User findByUsername(String username);

	    User findByEmail(String email);

		User findByUsernameAndPassword(String username, String password);
	}



