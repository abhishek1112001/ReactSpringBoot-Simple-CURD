package com.eb.entity;

import jakarta.persistence.*;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "User_Register")
public class User {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id 
	int Id;
	
	@Column(name = "firstName")
	String firstName;
	
	@Column(name = "lastName")
	String lastName;
	
	@Column(name = "email")
	String email;
	
	@Column(name = "password")
	String password;
	
	@Column(name = "phoneNo")
	String phoneNo;
	
	@Column(name = "address")
	String address;
	
}
