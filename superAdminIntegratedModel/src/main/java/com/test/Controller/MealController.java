package com.test.Controller;

import com.test.Entities.Meal;
import com.test.Service.MealService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/meals")
@CrossOrigin(origins = "*")
public class MealController {
    @Autowired
    private MealService mealService;

    @PostMapping("/add")
    public Meal addMeal(@RequestBody Meal meal) {
        return mealService.saveMeal(meal);
    }

    @GetMapping("/all")
    public List<Meal> getAllMeals() {
        return mealService.getAllMeals();
    }
}
