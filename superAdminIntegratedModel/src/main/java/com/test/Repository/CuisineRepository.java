package com.test.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.test.Entities.Cuisine;

@Repository
public interface CuisineRepository extends JpaRepository<Cuisine, Long> {
   
}
