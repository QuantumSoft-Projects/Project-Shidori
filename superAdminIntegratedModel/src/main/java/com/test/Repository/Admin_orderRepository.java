package com.test.Repository;

import com.test.Entities.*;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface Admin_orderRepository extends JpaRepository<Order,Long> {

    //List<Order> findByUserId(Long userId);
    List<Order> findByUser_UserId(Long userId);

    //List<Order> findByCloudKitchenId(Long cloudKitchenId);
    List<Order> findByCloudKitchen_KitchenId(Long kitchenId);

  //  @Query("SELECT o.userId FROM Order o GROUP BY o.userId ORDER BY COUNT(o.id) DESC LIMIT 1")
    //Long findUserWithMostOrders();
}
