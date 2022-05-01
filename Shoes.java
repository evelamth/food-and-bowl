
/*
 * The Shoes class represents the shoes lent out to the customers of the alley.
 * Shoes tend to be the same price regardless of size, so that's not included
 * in this class.
 * 
 * CODE BY KEVIN KERSHAW.
 */

public class Shoes extends Item {
	private double mensSize; // The size of the shoes in men's sizes.
	private double womensSize; // The size of the shoes in women's sizes.

	public Shoes(String displayName, double price, double mensSize, double womensSize) { // The complete constructor for the Shoes class.
		super();
		setDisplayName(displayName);
		setPrice(price);
		this.mensSize = mensSize;
		this.womensSize = womensSize;
	}

	public double getMensSize() { // Return the size of the shoes in men's sizes.
		return mensSize;
	}
	public double getWomensSize() { // Return the size of the shoes in women's sizes.
		return womensSize;
	}
}
