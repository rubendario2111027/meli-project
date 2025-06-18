package com.meli.service;

import com.meli.model.Product;
import com.meli.repository.JsonProductRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import java.util.Arrays;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class ProductServiceTest {
    private JsonProductRepository productRepository;
    private ProductService productService;

    @BeforeEach
    void setUp() {
        productRepository = mock(JsonProductRepository.class);
        productService = new ProductService(productRepository);
    }

    @Test
    void getAllProducts_returnsList() {
        Product p = new Product();
        p.setId("ML123");
        when(productRepository.findAll()).thenReturn(Arrays.asList(p));
        assertEquals(1, productService.getAllProducts().size());
    }

    @Test
    void getProductById_found() {
        Product p = new Product();
        p.setId("ML123");
        when(productRepository.findById("ML123")).thenReturn(Optional.of(p));
        assertNotNull(productService.getProductById("ML123"));
    }

    @Test
    void getProductById_notFound() {
        when(productRepository.findById("NOPE")).thenReturn(Optional.empty());
        assertNull(productService.getProductById("NOPE"));
    }

    @Test
    void getAllProducts_emptyList() {
        when(productRepository.findAll()).thenReturn(Arrays.asList());
        assertTrue(productService.getAllProducts().isEmpty());
    }

    @Test
    void getProductById_nullId_returnsNull() {
        assertNull(productService.getProductById(null));
    }
} 