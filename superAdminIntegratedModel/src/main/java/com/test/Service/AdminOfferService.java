package com.test.Service;

import org.springframework.stereotype.Service;

import com.test.Entities.AdminOffer;
import com.test.Repository.AdminOfferRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AdminOfferService {
    private final AdminOfferRepository adminOfferRepository;

    public AdminOfferService(AdminOfferRepository adminOfferRepository) {
        this.adminOfferRepository = adminOfferRepository;
    }

    public List<AdminOffer> getAllAdminOffers() {
        return adminOfferRepository.findAll();
    }

    public Optional<AdminOffer> getAdminOfferById(String id) {
        return adminOfferRepository.findById(id);
    }

    public AdminOffer createAdminOffer(AdminOffer adminOffer) {
        return adminOfferRepository.save(adminOffer);
    }

    public AdminOffer updateAdminOffer(String id, AdminOffer updatedOffer) {
        return adminOfferRepository.findById(id).map(existingOffer -> {
            existingOffer.setTitle(updatedOffer.getTitle());
            existingOffer.setDescription(updatedOffer.getDescription());
            existingOffer.setStartDate(updatedOffer.getStartDate());
            existingOffer.setEndDate(updatedOffer.getEndDate());
            existingOffer.setStatus(updatedOffer.getStatus());
            existingOffer.setImageUrl(updatedOffer.getImageUrl());
            return adminOfferRepository.save(existingOffer);
        }).orElse(null);
    }

    public void deleteAdminOffer(String id) {
        adminOfferRepository.deleteById(id);
    }
}
