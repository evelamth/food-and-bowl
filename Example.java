
/*
 * The Example class provides examples of the usage of certain
 * classes within the program.
 * 
 * CODE BY KEVIN KERSHAW.
 */

import java.io.FileNotFoundException;

public class Example {

	public static void main(String[] args) throws FileNotFoundException {

		Textfile textfile = new Textfile(); // Creates a new Textfile object that will grant access to the textfile functions.
		Group food = textfile.importItems("menu.txt", "Food"); // Creates a new Group object called "food" that reads from menu.txt. Uses a manual name entry.
		Group drinks = new Textfile().importItems("Drinks.txt"); // Creates a new group called "drinks" and reads from Drinks.txt. Automatically names the Group object.
		
		// Output the contents of the food and drinks groups.
		System.out.println(food.toString(true));
		System.out.println(drinks.toString(true));
		
		Group friedFood = new Group("Fried Food"); // Creates a new, empty Group object called friedFood.
		friedFood.addItem(new MenuItem("Chicken Wings", 4.49)); // Adds chicken wings to the friedFood group.
		friedFood.addItem(new MenuItem("Mozzarella Sticks", 5.99)); // Adds mozzarella sticks to the friedFood group.
		
		Group lanes = new Group("Lanes"); // Creates a new Group object called lanes.
		for (int i = 1; i <= 20; i++) {
			lanes.addItem(new Lane("Lane " + i, 10, i)); // Adds twenty lanes to the lanes group.
		}
		
		// Output the contents of the friedFood and lanes groups.
		System.out.println(friedFood.toString(true));
		System.out.println(lanes.toString(false));
	}

}
