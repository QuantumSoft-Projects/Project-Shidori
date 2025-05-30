package com.test.Controller;

import com.test.Entities.OrderTracking;
import com.test.Service.OrderTrackingService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tracking")
@CrossOrigin(origins = "*")
public class OrderTrackingController {
    @Autowired
    private OrderTrackingService orderTrackingService;

    @PostMapping("/add")
    public OrderTracking addTracking(@RequestBody OrderTracking orderTracking) {
        return orderTrackingService.saveTracking(orderTracking);
    }

    @GetMapping("/all")
    public List<OrderTracking> getAllTrackingRecords() {
        return orderTrackingService.getAllTrackings();
    }
}
