package com.eb.exception;

public class UserResource extends RuntimeException {
	
	public UserResource(String msg) {
		super(msg);
	}
}
