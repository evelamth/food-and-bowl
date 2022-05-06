package com.bowl.Bowling;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ShoesController {

	@GetMapping("menshoes")
	public List<Shoes> getMenShoes() {

		List<Shoes> menShoesList = new ArrayList<>(); // Create ArrayList holding men sizes
		while (true) {
			for (double i = 2; i <= 15; i += 0.5) { // set sizes : 2 , 2.5 ,... until 12
				Shoes shoe = new Shoes();
				shoe.setGender("Men");
				shoe.setSize(i);
				shoe.setPrice(4); // Set price to $4
				menShoesList.add(shoe); // add size to ArrayList
			}
			return menShoesList;
		}
	}

	@GetMapping("womenshoes")
	public List<Shoes> getWomenShoes() {
		List<Shoes> womenShoesList = new ArrayList<>(); // Create ArrayList holding women sizes
		while (true) {
			for (double i = 4; i <= 13; i += 0.5) { // set sizes : 5, 5.5 , ... until 12
				Shoes shoe2 = new Shoes();
				shoe2.setGender("Women");
				shoe2.setSize(i);
				shoe2.setPrice(4); // Set price to $4
				womenShoesList.add(shoe2); // add size to ArrayList
			}
			return womenShoesList;
		}
	}

}