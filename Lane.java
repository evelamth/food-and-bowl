
/*
 * The Lane class extends the Item class, creating a rentable lane
 * object to be sold through the interface.
 * 
 * CODE BY KEVIN KERSHAW.
 */

public class Lane extends Item {
	private int laneNumber; // The number of the lane in the alley.
	
	public Lane(String displayName, double price, int laneNumber) { // The constructor for the Lane class.
		super();
		setDisplayName(displayName);
		setPrice(price);
		this.laneNumber = laneNumber;
	}

	public int getLaneNumber() { // Return the lane number.
		return laneNumber;
	}

	// FOR TESTING
//	public String toString() {
//		return getPrice() + " " + getDisplayName();
//	}
}
