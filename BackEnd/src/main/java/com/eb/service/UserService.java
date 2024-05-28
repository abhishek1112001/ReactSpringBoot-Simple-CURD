package com.eb.service;

import java.util.List;

import com.eb.entity.User;


public interface UserService {

	User createUser(User u);
	User updateUser(User u);
	List<User>getAllUser();
	User getUserById(int id);
	String deleteUser(int id);
}
