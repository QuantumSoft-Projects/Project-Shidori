package com.test.Entities;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "Meal")
public class Meal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long mealId;

    @Column(nullable = false, length = 255)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    @ManyToOne
    @JoinColumn(name = "cuisine_id", nullable = false)
    private Cuisine cuisine;

    @Column(nullable = false)
    private Double price;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Availability availability = Availability.AVAILABLE;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    public enum Availability {
        AVAILABLE, OUT_OF_STOCK
    }
    
    @ManyToOne
    @JoinColumn(name = "managerId", referencedColumnName = "managerId")
    private Manager manager;

}
