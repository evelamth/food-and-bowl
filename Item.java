
/*
 * The Item class is the base class for every other purchasable item. It includes a
 * displayName variable to store the name to display in the interface, and a price variable
 * to print on the receipt (and also to show in the interface).
 * 
 * CODE BY KEVIN KERSHAW.
 */

public abstract class Item {
	private String displayName; // The name to display on the menu.
	private double price; // The price of the item.
	
	public Item() { // The default constructor for the Item class.
		super();
		this.displayName = "New Item";
	}
	public Item(String displayName, double price) { // The complete constructor for the Item class.
		super();
		this.displayName = displayName;
		this.price = price;
	}
	
	public String getDisplayName() { // Return the display name of the item.
		return displayName;
	}
	public void setDisplayName(String displayName) { // Set a new display name for the item.
		this.displayName = displayName;
	}
	public double getPrice() { // Return the price of the item.
		return price;
	}
	public String getPriceString() {
		return String.format("$%.2f", price);
	}
	public void setPrice(double price) { // Change the price of the item.
		this.price = price;
	}
	
	public String toString() {
		return getDisplayName() + ", " + getPriceString();
	}
}
