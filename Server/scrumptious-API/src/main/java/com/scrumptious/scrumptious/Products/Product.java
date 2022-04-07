package com.scrumptious.scrumptious.Products;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @Column(name = "products_id")
    @Getter
    private Integer id;

    @Column(name = "name")
    @Getter
    private String name;

    @Column(name = "image_url")
    @Getter
    private String imageUrl;

    @Column(name = "description")
    @Getter
    private String description;

    @Column(name = "store_quantity")
    @Getter @Setter
    private Integer storeQuantity;

    @Column(name = "price_per_pound")
    @Getter
    private Double pricePrePound;

    public Product() {
    }
}
