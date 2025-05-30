package com.test.Entities;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Data
@Table(name = "Manager")
public class Manager {
	
	@ManyToOne
	@JoinColumn(name = "cloud_kitchen_id", referencedColumnName = "kitchenId")
	private CloudKitchen cloudKitchen;

	@Column(name = "cloud_kitchen_id", insertable = false, updatable = false)
	private int cloudKitchenId;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID recordId;


	@Column(nullable = false, unique = true)
	private UUID managerId;


    @Column(nullable = false, length = 255)
    private String name;


    @Column(nullable = false, unique = true, length = 255)
    private String email;


    @Column(nullable = false, length = 255)
    private String password;

    @Column(nullable = false, length = 15)
    private String phone;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role = Role.MANAGER;

    @Column(nullable = false, length = 10)
    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Column(nullable = false, length = 500)
    private String address;

    @Column(nullable = false, length = 10)
    private String postalCode;

    @Column(nullable = false, length = 50)
    private String country;

    @Column(nullable = true, length = 255)
    private String profilePicturePath;  // Path of uploaded image

    @Column(nullable = true, length = 255)
    private String aadharCardPath;     // Path of uploaded image

   

    @Column(nullable = false, length = 20)
    private String bankAccountNumber;

    @Column(nullable = false, length = 11)
    private String ifscCode;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status = Status.ACTIVE;

    @Column(nullable = false)
    private LocalDateTime startDate = LocalDateTime.now();

    @Column(nullable = true)
    private LocalDateTime endDate;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false)
    private LocalDateTime updatedAt = LocalDateTime.now();

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    public enum Role {
        MANAGER, SUPERVISOR, ADMIN
    }

    public enum Status {
        ACTIVE, INACTIVE
    }

    public enum Gender {
        MALE, FEMALE, OTHER
    }

	public CloudKitchen getCloudKitchen() {
		return cloudKitchen;
	}

	public void setCloudKitchen(CloudKitchen cloudKitchen) {
		this.cloudKitchen = cloudKitchen;
	}

	public int getCloudKitchenId() {
		return cloudKitchenId;
	}

	public void setCloudKitchenId(int cloudKitchenId) {
		this.cloudKitchenId = cloudKitchenId;
	}

	public UUID getRecordId() {
		return recordId;
	}

	public void setRecordId(UUID recordId) {
		this.recordId = recordId;
	}

	public UUID getManagerId() {
		return managerId;
	}

	public void setManagerId(UUID managerId) {
		this.managerId = managerId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getProfilePicturePath() {
		return profilePicturePath;
	}

	public void setProfilePicturePath(String profilePicturePath) {
		this.profilePicturePath = profilePicturePath;
	}

	public String getAadharCardPath() {
		return aadharCardPath;
	}

	public void setAadharCardPath(String aadharCardPath) {
		this.aadharCardPath = aadharCardPath;
	}

	public String getBankAccountNumber() {
		return bankAccountNumber;
	}

	public void setBankAccountNumber(String bankAccountNumber) {
		this.bankAccountNumber = bankAccountNumber;
	}

	public String getIfscCode() {
		return ifscCode;
	}

	public void setIfscCode(String ifscCode) {
		this.ifscCode = ifscCode;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public LocalDateTime getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDateTime startDate) {
		this.startDate = startDate;
	}

	public LocalDateTime getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDateTime endDate) {
		this.endDate = endDate;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}


    
    
}
