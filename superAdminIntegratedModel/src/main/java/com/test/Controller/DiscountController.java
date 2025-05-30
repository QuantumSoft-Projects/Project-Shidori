package com.test.Controller;



import java.util.HashMap;
import java.util.List;
import java.util.Map;
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

import com.test.Entities.Discount;
import com.test.Service.DiscountService;

@RestController
@RequestMapping("/discounts")
@CrossOrigin(origins = "*") // Enable CORS for all origins
public class DiscountController {

    @Autowired
    private DiscountService discountService;

    // Get all discounts
    @GetMapping
    public ResponseEntity<List<Discount>> getAllDiscounts() {
        List<Discount> discounts = discountService.getAllDiscounts();
        return ResponseEntity.ok(discounts);
    }

    // Get discount by ID
    @GetMapping("/{id}")
    public ResponseEntity<Discount> getDiscountById(@PathVariable("id") String discountId) {
        return discountService.getDiscountById(discountId)
            .map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.badRequest().body(null));
    }



    // Create a new discount
    @PostMapping
    public ResponseEntity<?> createDiscount(@RequestBody Discount discount) {
        if (discount.getDiscountType() == null) {
            return ResponseEntity.badRequest().body("discountType cannot be null!");
        }
        discountService.saveDiscount(discount);
        return ResponseEntity.ok("Discount Created Successfully!");
    }

    // Update existing discount
    
    @PutMapping("/{id}")
    public ResponseEntity<?> updateDiscount(@PathVariable("id") String discountId, @RequestBody Discount discount) {
        Optional<Discount> existingDiscount = discountService.getDiscountById(discountId);
        
        if (existingDiscount.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Discount not found!");
        }

        Discount updatedDiscount = existingDiscount.get();
        
        // Update only non-null fields
        if (discount.getDiscountType() != null) updatedDiscount.setDiscountType(discount.getDiscountType());
        if (discount.getDiscountValue() != null) updatedDiscount.setDiscountValue(discount.getDiscountValue());
        if (discount.getStartDate() != null) updatedDiscount.setStartDate(discount.getStartDate());
        if (discount.getEndDate() != null) updatedDiscount.setEndDate(discount.getEndDate());
        if (discount.getMaxDiscount() != null) updatedDiscount.setMaxDiscount(discount.getMaxDiscount());
        if (discount.getMinOrderValue() != null) updatedDiscount.setMinOrderValue(discount.getMinOrderValue());
        if (discount.getUsageLimit() != null) updatedDiscount.setUsageLimit(discount.getUsageLimit());
        if (discount.getStatus() != null) updatedDiscount.setStatus(discount.getStatus());

        discountService.saveDiscount(updatedDiscount);

        // Returning success message along with updated discount details
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Discount updated successfully!");
        response.put("updatedDiscount", updatedDiscount);

        return ResponseEntity.ok(response);
    }


       

    // Delete discount by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteDiscount(@PathVariable("id") String discountId) {
        Optional<Discount> discount = discountService.getDiscountById(discountId);

        if (discount.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Discount not found!");
        }

        discountService.deleteDiscount(discountId);

        // Returning a confirmation message with HTTP 200 OK
        return ResponseEntity.ok("Discount deleted successfully!");
    }

}

   
