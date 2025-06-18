package com.meli.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.http.MediaType;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
@AutoConfigureMockMvc
public class ProductControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void getAllProducts_returnsProductList() throws Exception {
        mockMvc.perform(get("/api/products"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[0].id").exists());
    }

    @Test
    void getProductById_validId_returnsProduct() throws Exception {
        mockMvc.perform(get("/api/products/ML123"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.id").value("ML123"));
    }

    @Test
    void getProductById_invalidId_returnsNotFoundWithMessage() throws Exception {
        mockMvc.perform(get("/api/products/NO_EXISTE"))
                .andExpect(status().isNotFound())
                .andExpect(result -> assertTrue(result.getResolvedException() instanceof org.springframework.web.server.ResponseStatusException))
                .andExpect(result -> assertTrue(result.getResolvedException().getMessage().contains("Producto no encontrado")));
    }

    @Test
    void getProductById_emptyId_returns404() throws Exception {
        mockMvc.perform(get("/api/products/"))
                .andExpect(status().is4xxClientError());
    }
} 