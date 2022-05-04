package com.foodandbowl.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import com.foodandbowl.app.controllers.CreditCardController;

@SpringBootApplication
@ComponentScan(basePackageClasses = CreditCardController.class)
public class AppApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppApplication.class, args);
	}

}
