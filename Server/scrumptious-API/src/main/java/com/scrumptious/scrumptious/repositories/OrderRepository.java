package com.scrumptious.scrumptious.repositories;

import com.scrumptious.scrumptious.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository <Order,Integer> {
}
