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
    @Column(name="roast")
    @Getter
    private String roast;
    @Column(name="location")
    @Getter
    private String location;

    public Product() {
    }

    public Product(String name, String imageUrl, String description, Integer storeQuantity, Double pricePrePound, String roast, String location) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description;
        this.storeQuantity = storeQuantity;
        this.pricePrePound = pricePrePound;
        this.roast = roast;
        this.location = location;
    }
}
