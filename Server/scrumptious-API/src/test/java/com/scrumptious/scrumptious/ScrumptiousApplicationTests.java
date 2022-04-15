package com.scrumptious.scrumptious;

import com.scrumptious.scrumptious.controllers.ProductController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.testng.Assert;

@SpringBootTest

class ScrumptiousApplicationTests {

	@Autowired
	private ProductController productController;

	@Test
	void contextLoads() {
		Assert.assertNotNull(productController);
	}

}
