package com.test.Entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Cuisine")
public class Cuisine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cuisineId;

    @Column(unique = true, nullable = false, length = 255)
    private String cuisineName;

    @Column(columnDefinition = "TEXT")
    private String description;
}

