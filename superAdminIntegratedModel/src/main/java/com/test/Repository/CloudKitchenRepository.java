package com.test.Repository;

import com.test.Entities.CloudKitchen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CloudKitchenRepository extends JpaRepository<CloudKitchen, Integer> {
}
