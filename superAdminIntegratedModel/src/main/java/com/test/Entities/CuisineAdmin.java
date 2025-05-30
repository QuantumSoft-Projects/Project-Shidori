package com.test.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "cuisine")
public class CuisineAdmin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cuisineId;

    @Column(nullable = false, unique = true, length = 255)
    private String cuisineName;

    @Column(columnDefinition = "TEXT")
    private String description;
}
