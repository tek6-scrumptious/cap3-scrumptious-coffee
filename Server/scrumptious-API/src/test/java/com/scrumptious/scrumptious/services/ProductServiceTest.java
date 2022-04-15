package com.scrumptious.scrumptious.services;

import com.scrumptious.scrumptious.models.Product;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
class ProductServiceTest {

    @MockBean
    private ProductService productService;

    @Test
    void getAllProducts() {
        List<Product> productList = productService.getAllProducts();
        assertNotNull(productList);
    }

    @Test
    void getProductById() {
        Optional<Product> product = productService.getProductById(1);

        if(product.isPresent()){
            Product testProduct = product.get();
            String productName = testProduct.getName();
            assertEquals(productName, "Hawaiian Kona Coffee..");
        }
    }

    @Test
    void getProductPage() {
        List<Product> productList = productService.getProductPage(1,1,"id");
        assertNotNull(productList);
    }

    @Test
    void addProduct() {
        Product product = new Product();
        product.setStoreQuantity(5);
        product.setDescription("5");
        product.setName("5");
        product.setImageUrl("5");
        product.setPricePrePound(5.00);

        productService.addProduct(product);

        Optional<Product> foundNewProduct = productService.getProductById(25);

        if(foundNewProduct.isPresent()){
            Product testProduct = foundNewProduct.get();
            assertEquals(testProduct, product);
        }


    }

    @Test
    void deleteProduct() {
        productService.deleteProduct(24);
        assertTrue(productService.getProductById(24).isEmpty());
    }

    @Test
    void checkoutUpdateQty() {
        productService.checkoutUpdateQty(23, 5);
        Optional<Product> product = productService.getProductById(23);

        if(product.isPresent()){
            Product testProduct = product.get();
            int updatedQuantity = testProduct.getStoreQuantity();
            assertEquals(updatedQuantity, 10);
        }

    }

    @Test
    void updateProduct() {
        productService.updateProduct(24, "5", 5.00, 5, "5", "5");

        Optional<Product> product = productService.getProductById(24);

        if(product.isPresent()){
            Product testProduct = product.get();
            int actualQuantity = testProduct.getStoreQuantity();
            assertEquals(testProduct.getName(), "5");
            assertEquals(testProduct.getPricePrePound(), 5.00);
            assertEquals(actualQuantity, 5);
            assertEquals(testProduct.getImageUrl(), "5");
            assertEquals(testProduct.getDescription(), "5");
        }
    }
}