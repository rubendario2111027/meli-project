package com.meli.repository;

import com.meli.model.Product;
import org.junit.jupiter.api.Test;
import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;

public class JsonProductRepositoryTest {
    @Test
    void findAll_returnsProducts() {
        JsonProductRepository repo = new JsonProductRepository();
        List<Product> products = repo.findAll();
        assertFalse(products.isEmpty());
    }

    @Test
    void findById_existingId_returnsProduct() {
        JsonProductRepository repo = new JsonProductRepository();
        Optional<Product> product = repo.findById("ML123");
        assertTrue(product.isPresent());
        assertEquals("ML123", product.get().getId());
    }

    @Test
    void findById_nonExistingId_returnsEmpty() {
        JsonProductRepository repo = new JsonProductRepository();
        Optional<Product> product = repo.findById("NOPE");
        assertFalse(product.isPresent());
    }
} 