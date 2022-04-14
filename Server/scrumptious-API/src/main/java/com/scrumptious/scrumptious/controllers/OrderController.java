package com.scrumptious.scrumptious.controllers;

import com.scrumptious.scrumptious.models.Order;
import com.scrumptious.scrumptious.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;


    @CrossOrigin
    @GetMapping()
    public List<Order> getAllOrder(){
        return orderService.getAllOrders();
    }

    @CrossOrigin
    @GetMapping("/{orderId}")
    public Optional<Order> getOrder(@PathVariable("orderId") Integer id){
        return orderService.getOrder(id);
    }

    @CrossOrigin
    @PostMapping()
    public void addOrder(@RequestBody Order order){
        orderService.addOrder(order);
    }




}
