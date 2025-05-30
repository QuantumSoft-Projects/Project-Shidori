package com.test.Controller;
import java.util.List;

import com.test.Entities.Rating;
import com.test.Service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/taste_of_india_backend/ratings")
public class SuperAdminRatingController {

    @Autowired
    private RatingService ratingService;

    // 1. View all cloud kitchens' ratings
    @GetMapping("/all")
    public ResponseEntity<List<Rating>> getAllRatings() {
        List<Rating> ratings = ratingService.getAllRatings();
        return ResponseEntity.ok(ratings);
    }


    // 2. View highest-rated cloud kitchen
    @GetMapping("/highest-rated")
    public Rating getHighestRatedKitchen() {
        return ratingService.getHighestRatedKitchen();
    }

    // 3. View lowest-rated cloud kitchen
    @GetMapping("/lowest-rated")
    public Rating getLowestRatedKitchen() {
        return ratingService.getLowestRatedKitchen();
    }

    // 4. View a particular cloud kitchen's rating by ID
    @GetMapping("/{cloudKitchenId}")
    public ResponseEntity<List<Rating>> getRatings(@PathVariable("cloudKitchenId") int cloudKitchenId) {
        List<Rating> ratings = ratingService.getRatingsForCloudKitchen(cloudKitchenId);
        if (ratings.isEmpty()) {
            return ResponseEntity.noContent().build(); // Return 204 if no ratings found
        }
        return ResponseEntity.ok(ratings);
    }

    // View ratings using a filter (e.g., min and max rating)
    @GetMapping("/filter")
    public ResponseEntity<List<Rating>> getRatingsWithinRange(
            @RequestParam(name = "minRating", required = false, defaultValue = "0") double minRating,
            @RequestParam(name = "maxRating", required = false, defaultValue = "5") double maxRating) {
        
        if (minRating > maxRating) {
            return ResponseEntity.badRequest().build(); // Returns 400 Bad Request
        }
        
        List<Rating> ratings = ratingService.getRatingsWithinRange(minRating, maxRating);
        return ResponseEntity.ok(ratings);
    }


}
