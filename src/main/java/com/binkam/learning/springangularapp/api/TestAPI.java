package com.binkam.learning.springangularapp.api;


import com.binkam.learning.springangularapp.model.Test;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping(path="/api")
public class TestAPI {
    @GetMapping(path = "/test",produces = MediaType.APPLICATION_JSON_VALUE)
	public Test helloWorld(){
        Test test  = new Test();
        test.setValue("Test Successful");
		return test;
	}
}
