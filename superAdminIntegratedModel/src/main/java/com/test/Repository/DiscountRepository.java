package com.test.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.test.Entities.Discount;

public interface DiscountRepository extends JpaRepository<Discount, String> {
    List<Discount> findByStatus(String status);
}