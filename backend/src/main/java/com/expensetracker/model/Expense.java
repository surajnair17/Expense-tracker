package com.expensetracker.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private double amount;
    private String category;
    private LocalDate date;

    @ManyToOne
    private User user;

    public Expense() {}

    // Getters and setters ...
}
