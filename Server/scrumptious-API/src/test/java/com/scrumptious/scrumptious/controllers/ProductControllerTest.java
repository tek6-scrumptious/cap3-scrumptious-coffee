package com.scrumptious.scrumptious.controllers;

import com.scrumptious.scrumptious.repositories.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(ProductController.class)
class ProductControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private ProductController productController;
    @MockBean
    private ProductRepository productRepository;

    @Test
    void getProducts() throws Exception {
        this.mockMvc.perform(get("/")).andExpect(status().isOk());
    }

    @Test
    void getProductById() throws Exception {
        this.mockMvc.perform(get("/1")).andExpect(status().isOk());
    }

    @Test
    void getProductPage() throws Exception {
        this.mockMvc.perform(get("/pages")).andExpect(status().isOk());
    }

    @Test
    void addProduct(){

    }

    @Test
    void deleteProduct() {
    }

    @Test
    void checkoutUpdateQty() {
    }

    @Test
    void updateProduct() {
    }
}