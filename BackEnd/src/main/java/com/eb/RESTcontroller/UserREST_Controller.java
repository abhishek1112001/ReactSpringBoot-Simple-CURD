package com.eb.RESTcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eb.entity.User;
import com.eb.service.UserService;

@RestController
@CrossOrigin(origins="http://localhost:5173")
@RequestMapping("/app")
public class UserREST_Controller {
	
	@Autowired
	UserService service ;
	
	@PostMapping("/adduser")
	public User createUser(@RequestBody User u) {
		return service.createUser(u);
	}
	
	@PutMapping("/update/{id}")
	public User updateUser(@PathVariable ("id")int id,@RequestBody User u) {
		u.setId(id);
		return service.updateUser(u);
	}
	
	@GetMapping("/readAll")
	public List<User> getAllUsers() 
	{
		return service.getAllUser();
	}
	
	@DeleteMapping("/remove/{id}")
	public String deleteUser (@PathVariable("id")int id) 
 
	{
		return service.deleteUser(id);
		
	}
	
	@GetMapping("/read/{id}")
	public User getUserById(@PathVariable("id")int id)
	{
		return service.getUserById(id);
		
	}

}
