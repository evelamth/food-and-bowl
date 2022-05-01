
public class CustomerDemo {

	public static void main(String[] args) {

		Customer customer = new Customer("Earl", "Hibbs", "hibbse77737@live.bucks.edu", "987-654-3210", "11111111111111");
		System.out.print("First Name: " + customer.getFirstName() + "     Last Name: " + customer.getLastName() +
				"\nEmail: " + customer.getEmail() + "\nPhone Number: " + customer.getPhoneNumber() + "     Credit Card: " + customer.getCreditCard());
	}

}
