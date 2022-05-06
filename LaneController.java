package com.bowl.Bowling;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LaneController {

	@GetMapping("lane")
	public List<Lane> getLanes() {

		List<Lane> laneList = new ArrayList<>(); // Create ArrayList holding lane number.
		while (true) {
			for (int i = 1; i <= 10; i++) { // Set lane from 1 to 10.
				Lane lane = new Lane();
				lane.setLaneNumber(i);
				lane.setPrice(10); // set price to $10
				laneList.add(lane); // add lane to ArrayList
			}

			return laneList;
		}

	}
}
