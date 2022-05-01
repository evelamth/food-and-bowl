
/*
 * The Textfile class allows for a group of items to be imported from
 * a .txt file and automatically placed in a Group object.
 * 
 * CODE BY KEVIN KERSHAW.
 */

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner; // Import the textfile scanner.

public class Textfile {
	
	public Group importItems(String filename) throws FileNotFoundException { // Create a new Group object, using the name of the file as the group name.
		return importItems(filename, filename.replace(".txt",""));
	}
	
	public Group importItems(String filename, String groupName) throws FileNotFoundException { // Create a new Group object with a set name.
		Group newGroup = new Group(groupName); // Initialize the new Group object.
		File file = new File(filename); // Find the file to create the group from.
		Scanner fileScanner = new Scanner(file); // Create the Scanner object for the file.
		
		while (fileScanner.hasNext()){ // If there is another item in the list,
			String[] line = fileScanner.nextLine().split("::"); // Split the name and the price into two parts.
			newGroup.addItem(new MenuItem(line[0], Double.parseDouble(line[1]))); // Turn the line into an item with a name and price, and add it to the group.
		}
		
		fileScanner.close(); // Close the file scanner.
		return newGroup; // Return the new Group.
	}
}
