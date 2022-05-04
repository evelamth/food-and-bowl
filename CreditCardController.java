package com.foodandbowl.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.foodandbowl.app.models.Card;
import com.foodandbowl.app.repo.CardRepo;

@RestController
public class CreditCardController {
	
	@Autowired
	private CardRepo cardRepo;
	
	@GetMapping("/")
	public String getTest() {
		return "test";
	}
	@CrossOrigin(origins = "*")
	@GetMapping("/cards")
	public List<Card> getCards() {
		return cardRepo.findAll();
	}
	
	@CrossOrigin(origins = "*")
	@PostMapping("/save")
	public String saveUser(@RequestBody Card cardFromUser) {
		Card cardModified = new Card();
		
		String cardType = cardNumberType(cardFromUser.getCardNumber());
		String hasMoney = checkCardBalance();
		
		cardModified.setCardNumber(cardFromUser.getCardNumber());
		cardModified.setCardNumberType(cardType);
		cardModified.setAcceptedStatus(hasMoney);
		
		cardRepo.save(cardModified);
		return "Saved...";
	}
	
	private String cardNumberType(String cardNumber) {
		String creditCardNumber = cardNumber;
		int creditCardNumberLength, firstDigit;
		
		creditCardNumberLength = creditCardNumber.length();
		firstDigit=Character.getNumericValue((creditCardNumber.charAt(0)));
		
	    if (creditCardNumberLength==13 && firstDigit==4) {
	        return "Visa";
	    } else if (creditCardNumberLength==15 && firstDigit==5) {
	        return "American Express";
	    } else if (creditCardNumberLength==16 && firstDigit==4) {
	        return "Mastercard";
	    } else {
	    	return "DENIED";
	    }
	}
	
	private String checkCardBalance() {
		int randNumb = (int)( Math.random() * 2 + 1);;
		
		if (randNumb==1) {
			return "ACCEPTED";
		}
		else {
			return "DECLINED";		
		}
	}
}