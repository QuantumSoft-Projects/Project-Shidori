package com.test.Controller;
 
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.Entities.Order;
import com.test.Entities.Payment;
import com.test.Entities.User;
import com.test.Repository.OrderRepository;
import com.test.Repository.PaymentRepository;
import com.test.Repository.UserRepository;
import com.test.Service.PaymentService;
 
@RestController
@RequestMapping("/payments")
@CrossOrigin(origins = "*")
public class PaymentController {
 
    @Autowired
    private PaymentService paymentService;
 
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    @PostMapping("/create")
    public ResponseEntity<Payment> createPayment(@RequestBody Payment payment) {
        Long userId = payment.getUser().getUserId();
        Long orderId = payment.getOrder().getOrderId(); // or getId(), depending on your entity

        // 🔍 Fetch managed User and Order
        User user = userRepository.findById(userId)
                     .orElseThrow(() -> new RuntimeException("User not found with ID: " + userId));
        Order order = orderRepository.findById(orderId)
                     .orElseThrow(() -> new RuntimeException("Order not found with ID: " + orderId));

        // ✅ Set the managed entities back to payment
        payment.setUser(user);
        payment.setOrder(order);

        // Save the payment
        Payment savedPayment = paymentRepository.save(payment);
        return ResponseEntity.ok(savedPayment);
    }
 
    @GetMapping("/{id}")
    public ResponseEntity<?> getPaymentById(@PathVariable Long id) {
        Optional<Payment> payment = paymentRepository.findById(id);

        if (payment.isPresent()) {
            return ResponseEntity.ok(payment.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Payment with ID " + id + " not found");
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Payment>> getAllPayments() {
        return ResponseEntity.ok(paymentService.getAllPayments());
    }
 
    @PutMapping("/update/{id}")
    public ResponseEntity<Payment> updatePayment(@PathVariable Long id, @RequestBody Payment payment) {
        return ResponseEntity.ok(paymentService.updatePayment(id, payment));
    }
 
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deletePayment(@PathVariable Long id) {
        paymentService.deletePayment(id);
        return ResponseEntity.ok("Payment deleted successfully");
    }
}