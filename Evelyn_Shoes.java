package com.bowl.Bowling;

public class Shoes {
	private String gender; // The size of the shoes in men's sizes.
	private double size; // The size of the shoes in women's sizes.
	private double price; // The price of shoes.

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public double getSize() {
		return size;
	}

	public void setSize(double size) {
		this.size = size;
	}

	public String getPrice() { // Return price
		return String.format("$%.2f", price);
	}

	public void setPrice(double price) {
		this.price = price;
	}
}
