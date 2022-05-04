package com.foodandbowl.app.models;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Random;

public class CreditCardInput {

private String creditCardNumber, exportedData, testMessage = "test";

public Random rand;

public CreditCardInput(String creditCardNumber) {
	this.creditCardNumber = creditCardNumber;
}

public String getTestMessage() {
	return testMessage;
}

public String getCreditCardNumber() { //get the credit card number 
	return creditCardNumber;
}

public String getExportedData() {
	return exportedData;
}

public void setExportedData(String exportedData) {
	this.exportedData = exportedData;
}

//Visa cards begin with a 4 and have 13 or 16 digits
//Mastercard cards begin with a 5 and has 16 digits
//American Express cards begin with a 3, followed by a 4 or a 7 has 15 digits	
public String determineTypeOfCreditCard() { //determine the credit card number 
	String creditCardNumber = getCreditCardNumber();
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
    } else {
    	exportedData="Credit Card Denied";
    }
    
    String creditCardTypeAndNumber=creditCardType+creditCardNumber;
   return creditCardTypeAndNumber;
}

public String exportedData() {
	int randNumb = rand.nextInt(10-1) + 1;
	if (randNumb==5) {
		setExportedData(determineTypeOfCreditCard()+" Declined");
	}
	else {
			
		setExportedData(determineTypeOfCreditCard()+" Declined");
			
}
	return getExportedData();
}

public void toFile() throws IOException { 
	 String filePath = "CreditCardNumbers.txt";
	    FileWriter fw = new FileWriter(filePath, true);    
	    String lineToAppend = ("\n"+ exportedData()); 
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
	
	


	
