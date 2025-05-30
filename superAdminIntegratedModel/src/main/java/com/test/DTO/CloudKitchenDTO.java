package com.test.DTO;





public class CloudKitchenDTO {
    private Integer kitchenId;
    private String kitchenName;
    private String kitchenType;
    private String cuisineType;
    private String operatingTime;
    private Integer hygieneRating;
    private String location;
    private String region;
    private String country;
    private String state;
    private String city;
    private String postalCode;
    private String googleMapsLocation;
    private String managerName;
    private String gstNumber;
    private String paymentMethods;
    private String documentName;
    private String status;

    public CloudKitchenDTO() {}

    public CloudKitchenDTO(com.test.Entities.CloudKitchen kitchen) {
        this.kitchenId = kitchen.getKitchenId();
        this.kitchenName = kitchen.getKitchenName();
        this.kitchenType = kitchen.getKitchenType().name();
        this.cuisineType = kitchen.getCuisineType();
        this.operatingTime = kitchen.getOperatingTime();
        this.hygieneRating = kitchen.getHygieneRating();
        this.location = kitchen.getLocation();
        this.region = kitchen.getRegion();
        this.country = kitchen.getCountry();
        this.state = kitchen.getState();
        this.city = kitchen.getCity();
        this.postalCode = kitchen.getPostalCode();
        this.googleMapsLocation = kitchen.getGoogleMapsLocation();
        this.managerName = kitchen.getManagerName();
        this.gstNumber = kitchen.getGstNumber();
        this.paymentMethods = kitchen.getPaymentMethods();
        this.documentName = kitchen.getDocumentName();
        this.status = kitchen.getStatus() != null ? kitchen.getStatus().name() : null;
        
        
    }

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

	public String getKitchenType() {
		return kitchenType;
	}

	public void setKitchenType(String kitchenType) {
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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}

    
