package com.tomjshore.cvwebsite.restcontroller;

import static org.junit.Assert.*;

import org.junit.Test;

public class BasicInfoControllerTests {

	
	@Test
	public void testIntroReturnsAStringWrappedInAJsonObjectCalledIntro(){
		//given
		BasicInfoController controller = new BasicInfoController();
		
		//when
		String result = controller.intro();
		
		//then
		assertNotNull(result);
		
	}
}
