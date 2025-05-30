package com.test.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.DTO.*;
import com.test.Entities.*;

import com.test.Repository.*;
import com.test.Service.*;

import jakarta.persistence.EntityNotFoundException;

@Service
public class MealAdminServiceImpl implements MealAdminService {

    @Autowired
    private MealAdminRepository mealAdminRepository;

    public MealAdminServiceImpl(MealAdminRepository mealAdminRepository) {
        this.mealAdminRepository = mealAdminRepository;
    }

    @Autowired
    private CuisineAdminRepository cuisineAdminRepository;

    @Autowired
    private AdminRepository adminRepository;

   

    @Override
    public void deleteMeal(Long mealId) {
        mealAdminRepository.findById(mealId).orElseThrow(() -> new EntityNotFoundException("Meal not found with ID: " + mealId));
        mealAdminRepository.deleteById(mealId);
    }

    @Override
    public MealAdmin1 addMeal(MealDTO mealDTO) {


        CuisineAdmin cuisineAdmin = cuisineAdminRepository.findById(mealDTO.getCuisineId())
                .orElseThrow(() -> new RuntimeException("Cuisine not found"));

        mealAdmin2 mealAdmin2 = adminRepository.findById(mealDTO.getAdminId())
                .orElseThrow(() -> new RuntimeException("Admin not found"));

        MealAdmin1 mealAdmin1 = new MealAdmin1();
        mealAdmin1.setName(mealDTO.getName());
        mealAdmin1.setDescription(mealDTO.getDescription());
        mealAdmin1.setCuisine(cuisineAdmin);
        mealAdmin1.setPrice(mealDTO.getPrice());
        mealAdmin1.setAvailability(MealAdmin1.Availability.valueOf(mealDTO.getAvailability().toUpperCase()));
        mealAdmin1.setAdmin(mealAdmin2);

        return mealAdminRepository.save(mealAdmin1);
    }

}
