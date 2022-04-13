package com.scrumptious.scrumptious.services;

import com.scrumptious.scrumptious.models.Order;
import com.scrumptious.scrumptious.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Optional<Order> getOrder(Integer id){
        return orderRepository.findById(id);
    }

    public List<Order> getAllOrders(){
        return orderRepository.findAll();
    }

    public void addOrder(Order order){
        orderRepository.save(order);
    }


}
