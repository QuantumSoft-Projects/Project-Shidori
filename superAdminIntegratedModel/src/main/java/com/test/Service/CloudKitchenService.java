package com.test.Service;

import com.test.Entities.CloudKitchen;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;
import java.util.Optional;

public interface CloudKitchenService {
	

    CloudKitchen saveCloudKitchen(CloudKitchen cloudKitchen);
    CloudKitchen getCloudKitchenById(Integer id);
    List<CloudKitchen> getAllCloudKitchens();
    boolean deleteCloudKitchen(Integer id);
    ResponseEntity<String> updateCloudKitchen(Integer id, CloudKitchen updatedKitchen);
    ResponseEntity<String> updateHygieneRating(Integer id, Integer hygieneRating);
    ResponseEntity<String> updateManagerName(Integer id, String managerName);
    ResponseEntity<String> updateLocation(Integer id, String location);
    ResponseEntity<String> updateCuisineType(Integer id, String cuisineType);
    ResponseEntity<String> updateOperatingTime(Integer id, String operatingTime);
    ResponseEntity<String> updateRegion(Integer id, String region);
    ResponseEntity<String> updateCountry(Integer id, String country);
    ResponseEntity<String> updateState(Integer id, String state);
    ResponseEntity<String> updateCity(Integer id, String city);
    ResponseEntity<String> updatePostalCode(Integer id, String postalCode);
    ResponseEntity<String> updateGoogleMapsLocation(Integer id, String googleMapsLocation);
    ResponseEntity<String> updateGstNumber(Integer id, String gstNumber);
    ResponseEntity<String> updatePaymentMethods(Integer id, String paymentMethods);
    ResponseEntity<String> updateFssaiLicenseDocument(Integer id, MultipartFile fssaiLicenseDocument);
	ResponseEntity<String> updateNecessaryDocuments(Integer id, MultipartFile necessaryDocuments);
}