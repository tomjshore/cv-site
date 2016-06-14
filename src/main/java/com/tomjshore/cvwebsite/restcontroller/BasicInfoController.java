package com.tomjshore.cvwebsite.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BasicInfoController {

	@Value("${cv-website.intro}")
	@Autowired(required=false)
	private String introMessage;
	public static final String DEFAULT_INTRO_MESSAGE ="<p>Welcome to my website please have a look around<//p>";
	
	
	
	@RequestMapping("intro.json")
	public @ResponseBody String intro(){
		StringBuilder builder = new StringBuilder("{\"intro\" : \"");
		if(introMessage != null){
			builder.append(introMessage);
			builder.append("\"}");
			return builder.toString();
		}
		return BasicInfoController.DEFAULT_INTRO_MESSAGE;
	}
	
}
