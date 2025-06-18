package com.meli.repository;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.meli.model.Product;
import org.springframework.stereotype.Repository;

import java.io.InputStream;
import java.io.FileNotFoundException;
import java.util.List;
import java.util.Optional;

@Repository
public class JsonProductRepository {
    private final ObjectMapper objectMapper = new ObjectMapper();

    public List<Product> findAll() {
        try (InputStream is = getClass().getClassLoader().getResourceAsStream("products.json")) {
            if (is == null) throw new FileNotFoundException("products.json not found in resources");
            return objectMapper.readValue(is, new TypeReference<List<Product>>() {});
        } catch (Exception e) {
            throw new RuntimeException("Error reading products.json", e);
        }
    }

    public Optional<Product> findById(String id) {
        return findAll().stream().filter(p -> p.getId().equals(id)).findFirst();
    }
} 