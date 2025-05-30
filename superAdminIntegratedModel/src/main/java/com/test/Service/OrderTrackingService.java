package com.test.Service;

import com.test.Entities.OrderTracking;
import com.test.Repository.OrderTrackingRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderTrackingService {
    @Autowired
    private OrderTrackingRepository orderTrackingRepository;

    public OrderTracking saveTracking(OrderTracking orderTracking) {
        return orderTrackingRepository.save(orderTracking);
    }

    public List<OrderTracking> getAllTrackings() {
        return orderTrackingRepository.findAll();
    }
}
