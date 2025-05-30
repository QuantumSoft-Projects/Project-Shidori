package com.test.Controller;

import com.test.Entities.*;
import com.test.Service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/Admin_order")
public class Admin_orderController {
@Autowired
private Admin_orderService orderService;




    public Admin_orderController(Admin_orderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/user/{userId}")
    public List<Order> getOrdersByUserId(@PathVariable Long userId) {
        return orderService.getOrdersByUserId(userId);
    }

    @GetMapping("/cloud-kitchen/{cloudKitchenId}")
    public List<Order> getOrdersByCloudKitchenId(@PathVariable Long cloudKitchenId) {
        return orderService.getOrdersByCloudKitchenId(cloudKitchenId);
    }

  //  @GetMapping("/most-orders-user")
    //public Long getUserWithMostOrders() {
      //  return orderService.getUserWithMostOrders();
    //}
}
