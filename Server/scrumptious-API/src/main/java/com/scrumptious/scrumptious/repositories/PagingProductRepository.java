package com.scrumptious.scrumptious.repositories;

import com.scrumptious.scrumptious.models.Product;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PagingProductRepository extends PagingAndSortingRepository<Product,Integer> {
}
