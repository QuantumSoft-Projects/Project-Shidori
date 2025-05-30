package com.test.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.test.Entities.Cuisine;
import com.test.Service.CuisineService;

@RestController


@RequestMapping("/api/cuisines")
@CrossOrigin(origins = "*")
public class CuisineController {

    @Autowired
    private CuisineService cuisineService;

    @GetMapping("/getAll")
    public List<Cuisine> getAllCuisines() {

        return cuisineService.getAllCuisines();
    }

    @PostMapping("/add")
    public Cuisine addCuisine(@RequestBody Cuisine cuisine) {

        return cuisineService.addCuisine(cuisine);
    }
}
