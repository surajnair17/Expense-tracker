package com.expensetracker.controller;

import com.expensetracker.model.Expense;
import com.expensetracker.model.User;
import com.expensetracker.repository.ExpenseRepository;
import com.expensetracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    @Autowired
    private ExpenseRepository expenseRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/add")
    public Expense addExpense(@RequestBody Expense expense) {
        return expenseRepository.save(expense);
    }

    @GetMapping("/user/{username}")
    public List<Expense> getUserExpenses(@PathVariable String username) {
        User user = userRepository.findByUsername(username);
        return expenseRepository.findByUser(user);
    }

    @GetMapping("/user/{username}/category/{category}")
    public List<Expense> getUserExpensesByCategory(@PathVariable String username, @PathVariable String category) {
        User user = userRepository.findByUsername(username);
        return expenseRepository.findByUserAndCategory(user, category);
    }
}
