package com.scrumptious.scrumptious.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @Column(name = "order_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Integer id;


    @Column(name = "user_id")
    @Getter @Setter
    private Integer user_id;


    @Column(name = "total")
    @Getter @Setter
    private Double total;




}
