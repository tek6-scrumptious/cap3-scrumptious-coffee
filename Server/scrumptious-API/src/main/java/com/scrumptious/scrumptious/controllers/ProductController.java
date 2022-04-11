package com.scrumptious.scrumptious.controllers;

import com.scrumptious.scrumptious.services.ProductService;
import com.scrumptious.scrumptious.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private final ProductService productService;
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @CrossOrigin
    @GetMapping
    public List<Product> getProducts(){return productService.getAllProducts();}

    @CrossOrigin
    @GetMapping(path = "{productId}")
    public Optional<Product> getProductById(@PathVariable("productId") Integer productId){
        return productService.getProductById(productId);
    }

    @CrossOrigin
    @GetMapping(path = "/page")
    public Page<Product> getProductPage(Pageable pageable){
    return productService.getProductsPage(pageable);
    }

    @CrossOrigin
    @PostMapping(path = "/add")
    public void addProduct(@RequestBody Product product){
        productService.addProduct(product);
    }

    @CrossOrigin
    @DeleteMapping(path = "/delete/{productId}")
    public void deleteProduct(@PathVariable("productId") Integer productId){
        productService.deleteProduct(productId);
    }

    @CrossOrigin
    @PutMapping(path = "/checkoutUpdateQty/{productId}")
    public Product checkoutUpdateQty(@PathVariable("productId") Integer productId,@RequestParam(required = true) Integer number){
        return productService.checkoutUpdateQty(productId,number);
    }

    @CrossOrigin
    @PutMapping(path = "adminUpdate/{productId}")
    public Product updateProduct(@PathVariable("productId") Integer productId, @RequestParam(required = false) String productName,
                                 @RequestParam(required = false) Double productPrice, @RequestParam(required = false) Integer qty,
                                 @RequestParam(required = false) String productImgUrl, @RequestParam(required = false) String productDescription){
      return   productService.updateProduct(productId,productName,productPrice,qty,productImgUrl,productDescription);
    }
}
