package com.test.Repository;

import com.test.Entities.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByMealMealId(Long mealId);
    List<Review> findByUserUserId(Long userId);
}
