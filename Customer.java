//
// Code Made by Earl Hibbs
// 
// Code is subjected to change. (Will still update things)
//
public class Customer {

	//
	// Customer Requested Information
	//
	private String firstName;
	private String lastName;
	private String email;
	private String phoneNumber;
	private String creditCard;
	
	
	//
	// Constructor
	//
	public Customer(String firstName, String lastName, String email, String phoneNumber, String creditCard) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.creditCard = creditCard;
	}

	//
	// Getters for each variable
	//
	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getEmail() {
		return email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public String getCreditCard() {
		return creditCard;
	}

	//
	// Setters for each variable
	//
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public void setCreditCard(String creditCard) {
		this.creditCard = creditCard;
	}
	
}
