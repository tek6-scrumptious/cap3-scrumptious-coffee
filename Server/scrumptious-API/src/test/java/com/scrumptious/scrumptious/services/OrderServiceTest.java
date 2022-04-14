package com.scrumptious.scrumptious.services;

import com.scrumptious.scrumptious.models.Order;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.testng.Assert;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class OrderServiceTest {

    @MockBean
    private OrderService orderService;

    @Test
    void getOrder() {
        Optional<Order> orderOptional = orderService.getOrder(1);
        if(orderOptional.isPresent()){
            Order testOrder = orderOptional.get();
            double actualTestOrderName = testOrder.getTotal();
            assertEquals(actualTestOrderName, 24.51);
        }
    }

    @Test
    void getAllOrders() {
        List<Order> orderList = orderService.getAllOrders();
        assertNotNull(orderList);
    }

    @Test
    void addOrder() {
        Order testOrder = new Order();
        testOrder.setTotal(9.5);
        testOrder.setUser_id(50);
        orderService.addOrder(testOrder);

        Optional<Order> orderOptional = orderService.getOrder(50);
        if(orderOptional.isPresent()){
            Order addedOrder = orderOptional.get();
            double actualTestOrderTotal = addedOrder.getTotal();
            assertEquals(actualTestOrderTotal, 9.5);
        }


    }
}