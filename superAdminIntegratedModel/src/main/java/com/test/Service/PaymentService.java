package com.test.Service;
 
import com.test.Entities.Payment;
import com.test.Repository.PaymentRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;

import java.util.Optional;
 
@Service

public class PaymentService {
 
    @Autowired

    private PaymentRepository paymentRepository;
 
    public Payment createPayment(Payment payment) {

        return paymentRepository.save(payment);

    }
 
    public Optional<Payment> getPaymentById(Long id) {

        return paymentRepository.findById(id);

    }
 
    public List<Payment> getAllPayments() {

        return paymentRepository.findAll();

    }
 
    public Payment updatePayment(Long id, Payment paymentDetails) {

        return paymentRepository.findById(id).map(payment -> {

            payment.setAmount(paymentDetails.getAmount());

            payment.setPaymentMethod(paymentDetails.getPaymentMethod());

            payment.setPaymentStatus(paymentDetails.getPaymentStatus());

            return paymentRepository.save(payment);

        }).orElseThrow(() -> new RuntimeException("Payment not found"));

    }
 
    public void deletePayment(Long id) {

        paymentRepository.deleteById(id);

    }

}
 