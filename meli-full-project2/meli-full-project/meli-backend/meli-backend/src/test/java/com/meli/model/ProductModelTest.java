package com.meli.model;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import java.util.Arrays;

public class ProductModelTest {
    @Test
    void testProductGettersAndSetters() {
        Product p = new Product();
        p.setId("ID");
        p.setTitle("Title");
        p.setDescription("Desc");
        p.setPrice(100.0);
        p.setImages(Arrays.asList("img1", "img2"));
        p.setPayment_methods(Arrays.asList("cash", "card"));
        Product.Seller seller = new Product.Seller();
        seller.setName("SellerName");
        seller.setReputation("Good");
        p.setSeller(seller);
        p.setStock(10);
        p.setRatings(4.5);
        p.setReviews(100);

        assertEquals("ID", p.getId());
        assertEquals("Title", p.getTitle());
        assertEquals("Desc", p.getDescription());
        assertEquals(100.0, p.getPrice());
        assertEquals(2, p.getImages().size());
        assertEquals(2, p.getPayment_methods().size());
        assertEquals("SellerName", p.getSeller().getName());
        assertEquals("Good", p.getSeller().getReputation());
        assertEquals(10, p.getStock());
        assertEquals(4.5, p.getRatings());
        assertEquals(100, p.getReviews());
    }
} 