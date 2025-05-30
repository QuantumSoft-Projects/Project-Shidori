package com.test.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class AdminController {

    @GetMapping("/home")
    public String adminHome(Model model) {
        model.addAttribute("title", "Admin Home");
        return "admin/home";  // View name, should be located in templates
    }
}
