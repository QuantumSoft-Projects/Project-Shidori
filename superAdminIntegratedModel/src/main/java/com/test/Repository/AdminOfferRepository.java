package com.test.Repository;


import com.test.Entities.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminOfferRepository extends JpaRepository<AdminOffer, String> {
}
