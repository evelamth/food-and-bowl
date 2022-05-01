/*
 * The Group class is used in conjunction with the Item class. It will
 * hold multiple Items in an ArrayList to categorize items by type
 * (drinks, sides, snacks, meals, counter, etc.)
 * 
 * CODE BY KEVIN KERSHAW.
 */

import java.util.ArrayList;

public class Group{
	private String groupName; // The display name of the group.
	private ArrayList<Item> group = new ArrayList<Item>(); // The group that will hold the MenuItems.
	
	public Group() {
		super();
		this.groupName = "New Group";
	}
	public Group(String groupName) { // The constructor for the Group class.
		super();
		this.groupName = groupName;
	}
		
	public String getGroupName() { // Return the name of the group.
		return groupName;
	}
	public void setGroupName(String groupName) { // Change the name of the group.
		this.groupName = groupName;
	}

	public void addItem(Item item) { // Add an item to the group.
		group.add(item);
	}
	public Item getItem(int index) { // Return an item at a specified index of the group.
		return group.get(index);
	}
	
	public String toString(boolean includePrice) { // Return the contents of the group as a string.
		String string = "Group \"" + groupName + "\" contains...\n";
		for (int i = 0; i < group.size(); i++) {
			Item item = group.get(i); 
			String itemString = includePrice? item.toString() : item.getDisplayName();
			
			string = string + (i + 1) + ") " + itemString + "\n";
		}
		
		return string;
	}
}
