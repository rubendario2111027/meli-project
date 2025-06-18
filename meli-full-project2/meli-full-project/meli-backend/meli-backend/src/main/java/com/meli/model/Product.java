package com.meli.model;

import java.util.List;

public class Product {
    private String id;
    private String title;
    private String description;
    private double price;
    private List<String> images;
    private List<String> payment_methods;
    private Seller seller;
    private int stock;
    private double ratings;
    private int reviews;

    public static class Seller {
        private String name;
        private String reputation;
        // Getters y setters
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public String getReputation() { return reputation; }
        public void setReputation(String reputation) { this.reputation = reputation; }
    }

    // Getters y setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }
    public List<String> getImages() { return images; }
    public void setImages(List<String> images) { this.images = images; }
    public List<String> getPayment_methods() { return payment_methods; }
    public void setPayment_methods(List<String> payment_methods) { this.payment_methods = payment_methods; }
    public Seller getSeller() { return seller; }
    public void setSeller(Seller seller) { this.seller = seller; }
    public int getStock() { return stock; }
    public void setStock(int stock) { this.stock = stock; }
    public double getRatings() { return ratings; }
    public void setRatings(double ratings) { this.ratings = ratings; }
    public int getReviews() { return reviews; }
    public void setReviews(int reviews) { this.reviews = reviews; }
}
