package com.test.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.test.Entities.mealAdmin2;

@Repository
public interface AdminRepository extends JpaRepository<mealAdmin2, Long> {
}
