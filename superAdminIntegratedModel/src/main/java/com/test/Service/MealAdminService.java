package com.test.Service;

import com.test.DTO.*;
import com.test.Entities.*;

public interface MealAdminService {
    MealAdmin1 addMeal(MealDTO mealDTO);
    void deleteMeal(Long meal_id);
}
