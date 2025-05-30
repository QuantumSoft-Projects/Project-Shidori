package com.test.Service;

import com.test.Entities.Review;
import com.test.Repository.ReviewRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    public Review saveReview(Review review) {
        return reviewRepository.save(review);
    }

    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    public List<Review> getReviewsByMeal(Long mealId) {
        return reviewRepository.findByMealMealId(mealId);
    }

    public List<Review> getReviewsByUser(Long userId) {
        return reviewRepository.findByUserUserId(userId);
    }
}
