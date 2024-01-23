package com.mydomain;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
public class Hello {

    @CrossOrigin
	@GetMapping("/hellojava")
	  public String getAllProduct(){
	        return "Hello hellojava" ;
	  }
	
}