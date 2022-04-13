package com.scrumptious.scrumptious.controllers;

import com.scrumptious.scrumptious.models.Product;
import com.scrumptious.scrumptious.repositories.ProductRepository;
import com.scrumptious.scrumptious.services.ProductService;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
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
    void addProduct() throws Exception {
//        Product product = new Product("fd","fd","fd",3,3.00,"fd","fd");
//
//        Mockito.when(productRepository.save(product)).thenReturn(product);
//
//        mockMvc.perform(MockMvcRequestBuilders.post("/add")
//                .contentType(MediaType.APPLICATION_JSON)
//                .param("name", "fd")
//                .param("imageUrl", "fd")
//                .param("description", "fd")
//                .param("storeQuantity", String.valueOf(3))
//                .param("pricePrePound", String.valueOf(3.00))
//                        .param("roast", "fd")
//                        .param("location", "fd")
//                .content(String.valueOf(product)))
//                .andExpect(status().isCreated());

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