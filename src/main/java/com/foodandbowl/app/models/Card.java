package com.foodandbowl.app.models;

import javax.persistence.*;

@Entity
public class Card {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column
	private String cardNumber;
	
	@Column
	private String cardNumberType;
	
	@Column 
	private String acceptedStatus;
	/**
	 * @return the id
	 */
	public long getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(long id) {
		this.id = id;
	}
	/**
	 * @return the cardNumberType
	 */
	public String getCardNumberType() {
		return cardNumberType;
	}
	/**
	 * @param cardNumberType the cardNumberType to set
	 */
	public void setCardNumberType(String cardNumberType) {
		this.cardNumberType = cardNumberType;
	}
	/**
	 * @return the accepted
	 */
	
	/**
	 * @return the acceptedStatus
	 */
	public String getAcceptedStatus() {
		return acceptedStatus;
	}
	/**
	 * @param acceptedStatus the acceptedStatus to set
	 */
	public void setAcceptedStatus(String acceptedStatus) {
		this.acceptedStatus = acceptedStatus;
	}
	/**
	 * @return the cardNumber
	 */
	public String getCardNumber() {
		return cardNumber;
	}
	
	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}
	 /*
	 * @return the cardNumberType
	 */
//	public String getCardNumberType() {
//		return cardNumberType;
//	}
	/**
	 * @param cardNumberType the cardNumberType to set
	 */
	
//	public String setCardNumberType(String cardNumber) {
//		int creditCardNumberLength = cardNumber.length();
//		int firstDigit = Character.getNumericValue((cardNumber.charAt(0)));
//		
//	    if (creditCardNumberLength==13 && firstDigit==4) {
//	        return "Visa";
//	    } else if (creditCardNumberLength==15 && firstDigit==5) {
//	        return "American Express";
//	    } else if (creditCardNumberLength==16 && firstDigit==4 ) {
//	        return "Mastercard";
//	    } else {
//	    	return "Denied";
//	    }
//	}
}
