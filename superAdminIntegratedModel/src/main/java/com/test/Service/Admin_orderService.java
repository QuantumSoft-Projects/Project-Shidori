package com.test.Service;


import com.test.Entities.*;
import com.test.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class Admin_orderService {
    @Autowired
private Admin_orderRepository orderRepository;

    public Admin_orderService(Admin_orderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> getOrdersByUserId(Long userId) {
        return orderRepository.findByUser_UserId(userId);
    }

    public List<Order> getOrdersByCloudKitchenId(Long cloudKitchenId) {
        return orderRepository.findByCloudKitchen_KitchenId(cloudKitchenId);
    }

    //public Long getUserWithMostOrders() {
      //  return orderRepository.findUserWithMostOrders();
    //}
}
