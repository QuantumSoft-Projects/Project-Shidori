package com.test.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/customer")
@CrossOrigin(origins = "*")
public class CustomerController {

    @GetMapping("/home")
    public String adminHome(Model model) {
        model.addAttribute("title", "Coustomer Home");
        return "customer/home";  
    }
}
