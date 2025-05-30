package com.test.Controller;


import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.Entities.AdminOffer;
import com.test.Service.AdminOfferService;

@RestController
@RequestMapping("/admin-offers")
public class AdminOfferController {
    private final AdminOfferService adminOfferService;

    public AdminOfferController(AdminOfferService adminOfferService) {
        this.adminOfferService = adminOfferService;
    }

    @GetMapping
    public List<AdminOffer> getAllAdminOffers() {
        return adminOfferService.getAllAdminOffers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<AdminOffer> getAdminOfferById(@PathVariable String id) {
        return adminOfferService.getAdminOfferById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


    @PostMapping
    public AdminOffer createAdminOffer(@RequestBody AdminOffer adminOffer) {
        return adminOfferService.createAdminOffer(adminOffer);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AdminOffer> updateAdminOffer(@PathVariable String id, @RequestBody AdminOffer adminOffer) {
        AdminOffer updatedOffer = adminOfferService.updateAdminOffer(id, adminOffer);
        return updatedOffer != null ? ResponseEntity.ok(updatedOffer) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdminOffer(@PathVariable String id) {
        adminOfferService.deleteAdminOffer(id);
        return ResponseEntity.noContent().build();
    }
}
