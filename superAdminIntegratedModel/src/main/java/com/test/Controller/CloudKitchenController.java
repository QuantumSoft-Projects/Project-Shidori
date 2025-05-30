package com.test.Controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.test.DTO.CloudKitchenDTO;
import com.test.Entities.CloudKitchen;
import com.test.Service.CloudKitchenService;
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RestController
@RequestMapping("api/cloud-kitchens")
public class CloudKitchenController {

    @Autowired
    private CloudKitchenService cloudKitchenService;

    @PostMapping("/register")
    public ResponseEntity<String> registerCloudKitchen(
            @RequestParam("kitchenName") String kitchenName,
            @RequestParam("kitchenType") String kitchenType,
            @RequestParam("cuisineType") String cuisineType,
            @RequestParam("operatingTime") String operatingTime,
            @RequestParam("hygieneRating") Integer hygieneRating,
            @RequestParam("location") String location,
            @RequestParam("region") String region,
            @RequestParam("country") String country,
            @RequestParam("state") String state,
            @RequestParam("city") String city,
            @RequestParam("postalCode") String postalCode,
            @RequestParam("googleMapsLocation") String googleMapsLocation,
            @RequestParam("managerName") String managerName,
            @RequestParam("gstNumber") String gstNumber,
            @RequestParam("paymentMethods") String paymentMethods,
            @RequestParam("fssaiLicenseDocument") MultipartFile fssaiLicenseDocument,
            @RequestParam("necessaryDocuments") MultipartFile necessaryDocuments) {
        
        try {
            CloudKitchen newKitchen = new CloudKitchen();
            newKitchen.setKitchenName(kitchenName);
            newKitchen.setKitchenType(CloudKitchen.KitchenType.valueOf(kitchenType));
            newKitchen.setCuisineType(cuisineType);
            newKitchen.setOperatingTime(operatingTime);
            newKitchen.setHygieneRating(hygieneRating);
            newKitchen.setLocation(location);
            newKitchen.setRegion(region);
            newKitchen.setCountry(country);
            newKitchen.setState(state);
            newKitchen.setCity(city);
            newKitchen.setPostalCode(postalCode);
            newKitchen.setGoogleMapsLocation(googleMapsLocation);
            newKitchen.setManagerName(managerName);
            newKitchen.setGstNumber(gstNumber);
            newKitchen.setPaymentMethods(paymentMethods);
            
            cloudKitchenService.saveCloudKitchen(newKitchen);
            
            return ResponseEntity.ok("Cloud Kitchen registered successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error registering Cloud Kitchen: " + e.getMessage());
        }
    }
    @GetMapping("/all")
    public List<CloudKitchenDTO> getAllCloudKitchens() {
        return cloudKitchenService.getAllCloudKitchens()
                .stream()
                .map(CloudKitchenDTO::new)
                .collect(Collectors.toList());
    }
    
    @GetMapping("/{id}")
    public CloudKitchenDTO getCloudKitchen(@PathVariable Integer id) {
        CloudKitchen kitchen = cloudKitchenService.getCloudKitchenById(id);
        return new CloudKitchenDTO(kitchen);
    }


    
    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateCloudKitchen(@PathVariable Integer id, @RequestBody CloudKitchen updatedKitchen) {
        return cloudKitchenService.updateCloudKitchen(id, updatedKitchen);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCloudKitchen(@PathVariable Integer id) {
        boolean deleted = cloudKitchenService.deleteCloudKitchen(id);
        if (deleted) {
            return ResponseEntity.ok("Cloud Kitchen deleted successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cloud Kitchen not found");
        }
    }

    // Separate update methods for individual fields
    @PatchMapping("/update-hygiene/{id}")
    public ResponseEntity<String> updateHygieneRating(@PathVariable Integer id, @RequestParam("hygieneRating") Integer hygieneRating) {
        return cloudKitchenService.updateHygieneRating(id, hygieneRating);
    }

    @PatchMapping("/update-manager/{id}")
    public ResponseEntity<String> updateManagerName(@PathVariable Integer id, @RequestParam("managerName") String managerName) {
        return cloudKitchenService.updateManagerName(id, managerName);
    }

    @PatchMapping("/update-location/{id}")
    public ResponseEntity<String> updateLocation(@PathVariable Integer id, @RequestParam("location") String location) {
        return cloudKitchenService.updateLocation(id, location);
    }

    @PatchMapping("/update-cuisine/{id}")
    public ResponseEntity<String> updateCuisineType(@PathVariable Integer id, @RequestParam("cuisineType") String cuisineType) {
        return cloudKitchenService.updateCuisineType(id, cuisineType);
    }

    @PatchMapping("/update-operating-time/{id}")
    public ResponseEntity<String> updateOperatingTime(@PathVariable Integer id, @RequestParam("operatingTime") String operatingTime) {
        return cloudKitchenService.updateOperatingTime(id, operatingTime);
    }

    @PatchMapping("/update-region/{id}")
    public ResponseEntity<String> updateRegion(@PathVariable Integer id, @RequestParam("region") String region) {
        return cloudKitchenService.updateRegion(id, region);
    }

    @PatchMapping("/update-country/{id}")
    public ResponseEntity<String> updateCountry(@PathVariable Integer id, @RequestParam("country") String country) {
        return cloudKitchenService.updateCountry(id, country);
    }

    @PatchMapping("/update-state/{id}")
    public ResponseEntity<String> updateState(@PathVariable Integer id, @RequestParam("state") String state) {
        return cloudKitchenService.updateState(id, state);
    }

    @PatchMapping("/update-city/{id}")
    public ResponseEntity<String> updateCity(@PathVariable Integer id, @RequestParam("city") String city) {
        return cloudKitchenService.updateCity(id, city);
    }

    @PatchMapping("/update-postalCode/{id}")
    public ResponseEntity<String> updatePostalCode(@PathVariable Integer id, @RequestParam("postalCode") String postalCode) {
        return cloudKitchenService.updatePostalCode(id, postalCode);
    }

    @PatchMapping("/update-googleMapsLocation/{id}")
    public ResponseEntity<String> updateGoogleMapsLocation(@PathVariable Integer id, @RequestParam("googleMapsLocation") String googleMapsLocation) {
        return cloudKitchenService.updateGoogleMapsLocation(id, googleMapsLocation);
    }

    @PatchMapping("/update-gstNumber/{id}")
    public ResponseEntity<String> updateGstNumber(@PathVariable Integer id, @RequestParam("gstNumber") String gstNumber) {
        return cloudKitchenService.updateGstNumber(id, gstNumber);
    }

    @PatchMapping("/update-paymentMethods/{id}")
    public ResponseEntity<String> updatePaymentMethods(@PathVariable Integer id, @RequestParam("paymentMethods") String paymentMethods) {
        return cloudKitchenService.updatePaymentMethods(id, paymentMethods);
    }
    @PostMapping("/{kitchenId}/upload-fssai")
public ResponseEntity<String> uploadFssaiDocument(
        @PathVariable Integer kitchenId,
        @RequestParam("file") MultipartFile file) {
    try {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("File is empty. Please upload a valid FSSAI document.");
        }

        // Process the file (save to storage or database)
        String fileName = file.getOriginalFilename();
        System.out.println("Uploading FSSAI document: " + fileName + " for Kitchen ID: " + kitchenId);

        return ResponseEntity.ok("FSSAI document uploaded successfully for Kitchen ID: " + kitchenId);
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error uploading FSSAI document: " + e.getMessage());
    }
}

}
