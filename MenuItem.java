
/*
 * The MenuItem class is a special Item class that is specifically
 * built for food items.
 * 
 * CODE BY KEVIN KERSHAW.
 */

public class MenuItem extends Item {
	private int count; // The count of a menu item (Ex. 6 wings, 8 wings, etc.)
	private String size; // The size of a menu item (Ex. small, medium, large, etc.)
	
	public MenuItem(String displayName, double price) {
		setDisplayName(displayName);
		setPrice(price);
	}

	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public String getSize() {
		return size;
	}
	public void setSize(String size) {
		this.size = size;
	}

}
