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

    @Test
    void findById_nullId_returnsEmpty() {
        JsonProductRepository repo = new JsonProductRepository();
        Optional<Product> product = repo.findById(null);
        assertFalse(product.isPresent());
    }

    @Test
    void findAll_whenFileNotFound_throwsRuntimeException() {
        JsonProductRepository repo = new JsonProductRepository() {
            @Override
            public List<Product> findAll() {
                throw new RuntimeException("Error reading products.json", new java.io.FileNotFoundException("products.json not found in resources"));
            }
        };
        RuntimeException ex = assertThrows(RuntimeException.class, repo::findAll);
        assertTrue(ex.getMessage().contains("Error reading products.json"));
    }
} 