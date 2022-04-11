package com.scrumptious.scrumptious.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @Column(name = "products_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Integer id;

    @Column(name = "name")
    @Getter @Setter
    private String name;

    @Column(name = "image_url")
    @Getter @Setter
    private String imageUrl;

    @Column(name = "description")
    @Getter @Setter
    private String description;

    @Column(name = "store_quantity")
    @Getter @Setter
    private Integer storeQuantity;

    @Column(name = "price_per_pound")
    @Getter @Setter
    private Double pricePrePound;

    public Product() {
    }
}
