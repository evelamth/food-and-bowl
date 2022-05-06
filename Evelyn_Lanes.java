package com.bowl.Bowling;

public class Lane {
	private int laneNumber; // The number of the lane in the alley.
	private double price;

	public void setPrice(double price) {
		this.price = price;
	}

	public String getPrice() { // Return price
		return String.format("$%.2f", price);
	}

	public void setLaneNumber(int laneNumber) {
		this.laneNumber = laneNumber;
	}

	public int getLaneNumber() { // Return the lane number.
		return laneNumber;
	}

	// FOR TESTING
//	@Override
//	public String toString() {
//		return getLaneNumber() + ", " + getPrice();
//	}
}
