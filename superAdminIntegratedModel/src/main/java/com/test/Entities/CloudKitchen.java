package com.test.Entities;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "cloud_kitchen")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CloudKitchen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-generate kitchen ID
    private Integer kitchenId;

    @Column(nullable = false)
    private String kitchenName;



    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private KitchenType kitchenType;



    @Column(nullable = false)
    private String cuisineType;


        @Column(nullable = false)
    private String operatingTime;



    @Column(nullable = false)
    private Integer hygieneRating;


    @Column(nullable = false)
    private String location;


    @Column(nullable = false, length = 100)
    private String region;


    private String country;



    private String state;


    private String city;


    private String postalCode;


    private String googleMapsLocation;


    private String managerName;

    @Lob
    @Column(columnDefinition = "LONGBLOB")  // Store binary data
    private byte[] fssaiLicenseDocument;


    @Getter
    @Setter
    private String gstNumber;


    @Setter
    @Column(nullable = false)
    private String paymentMethods;
	

    private String documentName;


    @Lob
    @Column(columnDefinition = "LONGBLOB")  // Store binary data
    private byte[] necessaryDocument;


    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();



    @Enumerated(EnumType.STRING)
    private Status status = Status.ACTIVE;

    public enum KitchenType { VEG, NON_VEG, MIXED }
    public enum Status { ACTIVE, INACTIVE }

    @OneToMany(mappedBy = "cloudKitchen", cascade = CascadeType.ALL, orphanRemoval = true)
	    private List<Order> orders;
    @OneToMany(mappedBy = "cloudKitchen", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Rating> ratings;
	public Integer getKitchenId() {
		return kitchenId;
	}
	public void setKitchenId(Integer kitchenId) {
		this.kitchenId = kitchenId;
	}
	public String getKitchenName() {
		return kitchenName;
	}
	public void setKitchenName(String kitchenName) {
		this.kitchenName = kitchenName;
	}
	public KitchenType getKitchenType() {
		return kitchenType;
	}
	public void setKitchenType(KitchenType kitchenType) {
		this.kitchenType = kitchenType;
	}
	public String getCuisineType() {
		return cuisineType;
	}
	public void setCuisineType(String cuisineType) {
		this.cuisineType = cuisineType;
	}
	public String getOperatingTime() {
		return operatingTime;
	}
	public void setOperatingTime(String operatingTime) {
		this.operatingTime = operatingTime;
	}
	public Integer getHygieneRating() {
		return hygieneRating;
	}
	public void setHygieneRating(Integer hygieneRating) {
		this.hygieneRating = hygieneRating;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getRegion() {
		return region;
	}
	public void setRegion(String region) {
		this.region = region;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getPostalCode() {
		return postalCode;
	}
	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}
	public String getGoogleMapsLocation() {
		return googleMapsLocation;
	}
	public void setGoogleMapsLocation(String googleMapsLocation) {
		this.googleMapsLocation = googleMapsLocation;
	}
	public String getManagerName() {
		return managerName;
	}
	public void setManagerName(String managerName) {
		this.managerName = managerName;
	}
	public byte[] getFssaiLicenseDocument() {
		return fssaiLicenseDocument;
	}
	public void setFssaiLicenseDocument(byte[] fssaiLicenseDocument) {
		this.fssaiLicenseDocument = fssaiLicenseDocument;
	}
	public String getGstNumber() {
		return gstNumber;
	}
	public void setGstNumber(String gstNumber) {
		this.gstNumber = gstNumber;
	}
	public String getPaymentMethods() {
		return paymentMethods;
	}
	public void setPaymentMethods(String paymentMethods) {
		this.paymentMethods = paymentMethods;
	}
	public String getDocumentName() {
		return documentName;
	}
	public void setDocumentName(String documentName) {
		this.documentName = documentName;
	}
	public byte[] getNecessaryDocument() {
		return necessaryDocument;
	}
	public void setNecessaryDocument(byte[] necessaryDocument) {
		this.necessaryDocument = necessaryDocument;
	}
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	public Status getStatus() {
		return status;
	}
	public void setStatus(Status status) {
		this.status = status;
	}
	public List<Order> getOrders() {
		return orders;
	}
	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}
	public List<Rating> getRatings() {
		return ratings;
	}
	public void setRatings(List<Rating> ratings) {
		this.ratings = ratings;
	}
	
	
}