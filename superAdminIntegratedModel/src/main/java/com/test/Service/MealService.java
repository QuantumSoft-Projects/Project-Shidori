package com.test.Service;

import com.test.DTO.MealDTO;
import com.test.Entities.Meal;
import com.test.Repository.MealRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MealService {
    @Autowired
    private MealRepository mealRepository;

    public Meal saveMeal(Meal meal) {
        return mealRepository.save(meal);
    }

    public List<Meal> getAllMeals() {
        return mealRepository.findAll();
    }

	public void deleteMeal(Long meal_id) {
		
		
	}

	public Meal addMeal(MealDTO mealDTO) {
		
		return null;
	}
}
