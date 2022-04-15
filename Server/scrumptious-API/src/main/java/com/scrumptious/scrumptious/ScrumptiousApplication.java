package com.scrumptious.scrumptious;

import com.stripe.Stripe;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import javax.annotation.PostConstruct;

@SpringBootApplication
public class ScrumptiousApplication  {

	@Value("${spring.secretkey}")
	private String secretKey;

	@PostConstruct
	public void init(){
		Stripe.apiKey = secretKey;
	}

	public static void main(String[] args) {
		SpringApplication.run(ScrumptiousApplication.class, args);
	}

}
