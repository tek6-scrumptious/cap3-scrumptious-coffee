package com.scrumptious.scrumptious.services;

import com.scrumptious.scrumptious.models.Product;
import com.scrumptious.scrumptious.repositories.PagingProductRepository;
import com.scrumptious.scrumptious.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private final ProductRepository productRepository;
    @Autowired
    private final PagingProductRepository PagingProductRepository;


    public ProductService(ProductRepository productRepository, com.scrumptious.scrumptious.repositories.PagingProductRepository pagingProductRepository) {
        this.productRepository = productRepository;
        PagingProductRepository = pagingProductRepository;
    }

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(Integer productId){
        return productRepository.findById(productId);
    }


//    public Page<Product> getProductsPage(Pageable pageable){
//        return productRepository.findAll(pageable);
//        //    http://localhost:8080/products/page/?page=0&size=5
//    }

    public List<Product> getProductPage(Integer pageNum, Integer pageSize,String sortBy){
        Pageable pageable = PageRequest.of(pageNum,pageSize, Sort.by(sortBy));
        Page<Product> product = PagingProductRepository.findAll(pageable);

        if(product.hasContent()){
            return product.getContent();
        }
        else {
            return new ArrayList<>();
        }

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

    public Product checkoutUpdateQty(Integer productId,Integer number){
        Product product = productRepository.findById(productId).orElseThrow(()->new IllegalStateException(
                "Product not in DB"
        ));
       int updatedQty =  product.getStoreQuantity() -number;
       product.setStoreQuantity(updatedQty);
       productRepository.save(product);
       return product;
    }

    public Product updateProduct(Integer productId, String productName, Double productPrice,
                                 Integer qty,String productImgUrl, String productDescription){
        Product product = productRepository.findProductByIdEquals(productId);
        if (productName != null){
            product.setName(productName);
        }
        if(productPrice != null){
            product.setPricePrePound(productPrice);
        }
        if(qty != null){
            product.setStoreQuantity(qty);
        }
        if(productImgUrl != null){
            product.setImageUrl(productImgUrl);
        }
        if(productDescription != null){
            product.setDescription(productDescription);
        }

        productRepository.save(product);
        return product;
    }
}
