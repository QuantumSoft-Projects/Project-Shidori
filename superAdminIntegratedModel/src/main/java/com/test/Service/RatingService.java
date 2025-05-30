package com.test.Service;

import java.util.List;

import com.test.Entities.Rating;
import com.test.Repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class RatingService {

    @Autowired
    private RatingRepository ratingRepository;

    public List<Rating> getAllRatings() {
        return ratingRepository.findAll();
    }

    public Rating getHighestRatedKitchen() {
        return ratingRepository.findTopByOrderByRatingDesc();
    }

    public Rating getLowestRatedKitchen() {
        return ratingRepository.findTopByOrderByRatingAsc();
    }

    // Method to fetch ratings for a specific Cloud Kitchen
    public List<Rating> getRatingsForCloudKitchen(int cloudKitchenId) {
        return ratingRepository.findByCloudKitchenKitchenId(cloudKitchenId);
    }

    public List<Rating> getRatingsWithinRange(double minRating, double maxRating) {
        return ratingRepository.findByRatingBetween(minRating, maxRating);
    }
}
