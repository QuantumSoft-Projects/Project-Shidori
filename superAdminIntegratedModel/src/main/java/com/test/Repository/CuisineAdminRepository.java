package com.test.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.test.Entities.*;

@Repository
public interface CuisineAdminRepository extends JpaRepository<CuisineAdmin, Integer> {
}
