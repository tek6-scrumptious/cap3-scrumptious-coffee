package com.scrumptious.scrumptious.Products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(Integer productId){
        return productRepository.findById(productId);
    }


    public Page<Product> getProductsPage(Pageable pageable){
        return productRepository.findAll(pageable);
        //    http://localhost:8080/products/page/?page=0&size=5
    }

    public void addProduct(Product product){
        productRepository.save(product);
    }

    public void deleteProduct(Integer productId){
        boolean exists =  productRepository.existsById(productId);
        if(exists){
            productRepository.deleteById(productId);
        }
    }

    public Product updateProduct(Integer productId,Integer number){
        Product product = productRepository.findById(productId).orElseThrow(()->new IllegalStateException(
                "Product not in DB"
        ));
       int updatedQty =  product.getStoreQuantity() -number;
       product.setStoreQuantity(updatedQty);
       productRepository.save(product);
       return product;
    }
}
