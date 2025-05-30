package com.test.Controller;



import com.test.Entities.User;
import com.test.Repository.UserRepository;
import com.test.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

    @RestController
    @RequestMapping("/api/users")
    public class UserController {

        @Autowired
        private UserRepository userRepository;

        // ✅ Create a new user
        @PostMapping("/add")
        public ResponseEntity<User> addUser(@RequestBody User user) {
            User savedUser = userRepository.save(user);
            return ResponseEntity.ok(savedUser);
        }

        // ✅ Update username, email, and password

        @PutMapping("/update/{id}")
        public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody User updatedInfo) {
            return userRepository.findById(id).map(user -> {
                try {
                    if (updatedInfo.getUsername() != null) {
                        user.setUsername(updatedInfo.getUsername());
                    }
                    if (updatedInfo.getEmail() != null) {
                        user.setEmail(updatedInfo.getEmail());
                    }
                    if (updatedInfo.getPasswordHash() != null) {
                        user.setPasswordHash(updatedInfo.getPasswordHash());
                    }

                    User updatedUser = userRepository.save(user);
                    return ResponseEntity.ok(updatedUser);

                } catch (Exception e) {
                    e.printStackTrace(); // Logs full error in console
                    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                            .body("Error updating user: " + e.getMessage());
                }
            }).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found"));
        }

        // ✅ Delete user by ID
        @DeleteMapping("/delete/{id}")
        public ResponseEntity<?> deleteUser(@PathVariable Long id) {
            if (!userRepository.existsById(id)) {
                return ResponseEntity.notFound().build();
            }

            userRepository.deleteById(id);
            return ResponseEntity.ok("User deleted successfully.");
        }

        // ✅ Find user by ID
        @GetMapping("/{id}")
        public ResponseEntity<User> getUserById(@PathVariable Long id) {
            Optional<User> user = userRepository.findById(id);
            return user.map(ResponseEntity::ok)
                    .orElseGet(() -> ResponseEntity.notFound().build());
        }
    }


