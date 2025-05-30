package com.test.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.DTO.*;
import com.test.Entities.*;
import com.test.Service.*;

@RestController
@RequestMapping("/admin/meal")
public class MealControllerAdmin {

    @Autowired
    private MealService mealService;

    public MealControllerAdmin(MealService mealService) {
        this.mealService = mealService;
    }

    @DeleteMapping("/{meal_id}")
    public ResponseEntity<String> deleteMeal(@PathVariable("meal_id") Long meal_id) {
        mealService.deleteMeal(meal_id);
        return ResponseEntity.ok("Meal deleted successfully");
    }


    // Endpoint to add a new meal
    @PostMapping
    public Meal addMeal(@RequestBody MealDTO mealDTO) {
        return mealService.addMeal(mealDTO);
    }

}

