package com.test.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
@CrossOrigin(origins = "*") // Enables CORS for all origins for this controller
public class SuperadminController {

    // Handles GET requests to /admin/superadmin
    @GetMapping("/superadmin")
    public String adminHome(Model model) {
        model.addAttribute("title", "SuperAdmin Home");
        // Make sure this view exists in the resources/templates directory (for Thymeleaf)
        return "superadmin/home";  
    }
}
