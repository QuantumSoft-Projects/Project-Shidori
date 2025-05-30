package com.test.Repository;
 
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.test.Entities.Order;
import com.test.Entities.Payment;
 
@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {
	@Query("SELECT o FROM Order o WHERE o.user.id = :userId")
	List<Order> findByUserId(@Param("userId") Long userId);

}