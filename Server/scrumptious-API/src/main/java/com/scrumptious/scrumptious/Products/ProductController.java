package com.scrumptious.scrumptious.Products;

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
    @PutMapping(path = "/updateQty/{productId}")
    public Product updatedProductQty(@PathVariable("productId") Integer productId,@RequestParam(required = true) Integer number){
        return productService.updateProduct(productId,number);
    }
}
