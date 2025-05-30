package com.test.Repository;

import java.util.List;

import com.test.Entities.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RatingRepository extends JpaRepository<Rating, Integer> {

    Rating findTopByOrderByRatingDesc();

    Rating findTopByOrderByRatingAsc();

  //  List<Rating> findByCloudKitchenId(int cloudKitchenId);

    List<Rating> findByRatingBetween(double minRating, double maxRating);
    List<Rating> findByCloudKitchenKitchenId(int kitchenId);
}
