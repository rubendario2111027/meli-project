package com.meli.service;

import com.meli.model.Product;
import com.meli.repository.JsonProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final JsonProductRepository productRepository;

    public ProductService(JsonProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(String id) {
        return productRepository.findById(id).orElse(null);
    }
}
