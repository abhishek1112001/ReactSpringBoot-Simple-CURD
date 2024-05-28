package com.eb.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eb.entity.User;
import com.eb.exception.UserResource;
import com.eb.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepository repo;

	@Override
	public User createUser(User u) {
		
		return repo.save(u);
	}

	@Override
	public User updateUser(User u) {
		Optional<User>user = repo.findById(u.getId());
		
		if(user.isPresent()) {
			User updateUser = user.get();
			updateUser.setId(u.getId());
			updateUser.setFirstName(u.getFirstName());
			updateUser.setLastName(u.getLastName());
			updateUser.setEmail(u.getEmail());
			updateUser.setPassword(u.getPassword());
			updateUser.setPhoneNo(u.getPhoneNo());
			updateUser.setAddress(u.getAddress());
			repo.save(updateUser);
			return updateUser;
		}
		else {
			throw new UserResource("Searching id not available");
		}
	}

	@Override
	public List<User> getAllUser() {
		
		return repo.findAll();
	}

	@Override
	public User getUserById(int id) {
		
		Optional<User>user=repo.findById(id);
		if(user.isPresent()) {
			return user.get();		
			}
		else {
			throw new UserResource("Searching id not available");
		}
	}

	@Override
	public String deleteUser(int id) {
		Optional<User>user=repo.findById(id);
		if(user.isPresent()) {
			repo.delete(user.get());		
			}
		else {
			throw new UserResource("Searching id not available");
		}
		return "id deleted ";
	}

}
