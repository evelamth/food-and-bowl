import java.io.FileWriter;
import java.io.IOException;
import java.util.Random;

import javax.swing.JOptionPane;

public class CreditCardInput {

static String creditCardNumber=""; 
static int randNumb;
static String exportedData,creditCardTypeAndNumber;
String confirmationMessage;
static Random rand = new Random();

public static String getCreditCardNumber() { //get the credit card number 
	return creditCardNumber;
}

public void setCreditCardNumber(String creditCardNumber) {//set the credit card number 
	this.creditCardNumber = creditCardNumber;
}

//Visa cards begin with a 4 and have 13 or 16 digits
//Mastercard cards begin with a 5 and has 16 digits
//American Express cards begin with a 3, followed by a 4 or a 7 has 15 digits	
public static String determineTypeOfCreditCard() { //determine the credit card number and type
	creditCardNumber=getCreditCardNumber();
	int creditCardNumberLength, firstDigit;
	String creditCardType = "NONE";
	creditCardNumberLength=creditCardNumber.length();
	firstDigit=Character.getNumericValue((creditCardNumber.charAt(0)));
	
    if (creditCardNumberLength==13 && firstDigit==4) {
        creditCardType = "Visa ";
    } else if (creditCardNumberLength==15 && firstDigit==5) {
        creditCardType = "American Express ";
    } else if (creditCardNumberLength==16 && firstDigit==4 ) {
        creditCardType = "Mastercard ";
    }else {
    	exportedData="Credit Card Denied";
    }
    creditCardTypeAndNumber=creditCardType+creditCardNumber;
   return creditCardTypeAndNumber;
}
public static String exportedData() { // combines all data, credit card number, credit card type, and Declined/Accepted to export
		
	 randNumb = rand.nextInt(10-1) + 1;
	if (randNumb==5) {
		exportedData=determineTypeOfCreditCard()+" Declined";
	}
		else {
			
			exportedData=determineTypeOfCreditCard()+" Accepted";
			
}
	return exportedData;
}





public static void toFile() throws IOException { // writes export data to file
	 String filePath = "CreditCardNumbers.txt";
	    FileWriter fw = new FileWriter(filePath, true);    
	    String lineToAppend = ("\n"+exportedData()); 
	    fw.write(lineToAppend);
	    fw.close();
}
	
public String toString() {
	return exportedData();
			

}

	
public CreditCardInput() throws IOException {
	super();
	toFile();
}
}
	
	


	
