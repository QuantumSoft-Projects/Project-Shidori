package com.test.Controller;

import com.test.DTO.ChangePasswordRequest;
import com.test.DTO.LoginRequest;
import com.test.Entities.User;
import com.test.Repository.UserRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class HomeController {

    @Autowired
    private UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();


    @PostMapping("/do_register")
    public ResponseEntity<String> registerUser(@RequestBody User userRequest) {

        if (userRepository.existsByUsername(userRequest.getUsername())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists");
        }

        if (userRepository.existsByEmail(userRequest.getEmail())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email already registered");
        }

        if (userRepository.existsByPhoneNumber(userRequest.getPhoneNumber())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Phone number already registered");
        }

        userRequest.setPasswordHash(passwordEncoder.encode(userRequest.getPasswordHash())); // hash password
        userRepository.save(userRequest);

        return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully!");
    }


    @PostMapping("/do_login")
    public ResponseEntity<String> loginUser(@RequestBody LoginRequest loginRequest, HttpSession session) {

        Optional<User> userOptional = userRepository.findByUsername(loginRequest.getUsername());

        if (userOptional.isPresent()) {
            User user = userOptional.get();

            if (passwordEncoder.matches(loginRequest.getPassword(), user.getPasswordHash())) {
                session.setAttribute("user", user); // Save user in session
                return ResponseEntity.ok("Login successful");
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }

    @GetMapping("/logout")
    public ResponseEntity<String> logout(HttpSession session) {
        session.invalidate();
        return ResponseEntity.ok("Logged out successfully");
    }


    @PostMapping("/do_change_password")
    public ResponseEntity<String> changePassword(@RequestBody ChangePasswordRequest request,
                                                 HttpSession session) {

        User loggedInUser = (User) session.getAttribute("user");

        if (loggedInUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("You must be logged in to change password");
        }

        if (!passwordEncoder.matches(request.getCurrentPassword(), loggedInUser.getPasswordHash())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Current password is incorrect");
        }

        if (!request.getNewPassword().equals(request.getConfirmPassword())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("New passwords do not match");
        }

        loggedInUser.setPasswordHash(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(loggedInUser);

        return ResponseEntity.ok("Password changed successfully");
    }

}
