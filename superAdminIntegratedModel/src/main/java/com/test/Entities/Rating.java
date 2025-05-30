package com.test.Entities;

import java.time.LocalDateTime;

import com.test.Entities.CloudKitchen;
import com.test.Entities.Order;
import com.test.Entities.User;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "ratings")
public class Rating {

    @Id
    @Column(name = "id") // This will store user_id as FK
    private Integer id;

    @OneToOne
    @JoinColumn(name = "id", referencedColumnName = "user_id") // FK to users.user_id
    private User user;

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false) // Foreign key reference to orders.id
    private Order order;

    @ManyToOne
    @JoinColumn(name = "cloud_kitchen_id", nullable = false) // Foreign key reference to cloud_kitchens.id
    private CloudKitchen cloudKitchen;

    @Column(nullable = false)
    private Float rating; // FLOAT type in DB

    @Column(length = 255)
    private String review; // VARCHAR(255)

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    // Constructors
    public Rating() {
    }

    public Rating(User user, Order order, CloudKitchen cloudKitchen, Float rating, String review, LocalDateTime createdAt) {
        this.user = user;
        this.id = Math.toIntExact(user.getUserId()); // Ensures id is same as user_id
        this.order = order;
        this.cloudKitchen = cloudKitchen;
        this.rating = rating;
        this.review = review;
        this.createdAt = createdAt;
    }
    
}

