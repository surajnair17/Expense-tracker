package com.expensetracker.controller;

import com.expensetracker.model.User;
import com.expensetracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        if (user == null || user.getUsername() == null || user.getPassword() == null) {
            return "Missing username or password";
        }

        if (userRepository.findByUsername(user.getUsername()) != null) {
            return "Username already taken";
        }

        userRepository.save(user);
        return "Registration successful";
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User found = userRepository.findByUsername(user.getUsername());
        if (found != null && found.getPassword().equals(user.getPassword())) {
            return "Login successful";
        }
        return "Invalid credentials";
    }
}
