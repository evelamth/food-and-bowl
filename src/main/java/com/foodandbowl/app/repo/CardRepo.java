package com.foodandbowl.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodandbowl.app.models.Card;

public interface CardRepo extends JpaRepository<Card, Long> {

}
