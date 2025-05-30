package com.test.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Entity
@Table(name = "cloud_kitchen")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CloudKitchenAdmin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long kitchenId;

    //@OneToMany(mappedBy = "cloudKitchen", cascade = CascadeType.ALL, orphanRemoval = true)
   // private List<Order> orders;

}
