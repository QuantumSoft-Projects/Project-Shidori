package com.test.ServiceImpl;

import com.test.Entities.CloudKitchen;
import com.test.Repository.CloudKitchenRepository;
import com.test.Service.CloudKitchenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class CloudKitchenServiceImpl implements CloudKitchenService {

	
    @Autowired
    private CloudKitchenRepository cloudKitchenRepository;

    @Override
    public CloudKitchen saveCloudKitchen(CloudKitchen cloudKitchen) {
        return cloudKitchenRepository.save(cloudKitchen);
    }

    public CloudKitchen getCloudKitchenById(Integer id) {
        return cloudKitchenRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Kitchen not found with ID: " + id));
    }


    @Override
    public List<CloudKitchen> getAllCloudKitchens() {
        return cloudKitchenRepository.findAll();
    }

    @Override
    public boolean deleteCloudKitchen(Integer id) {
        if (cloudKitchenRepository.existsById(id)) {
            cloudKitchenRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public ResponseEntity<String> updateCloudKitchen(Integer id, CloudKitchen updatedKitchen) {
        if (!cloudKitchenRepository.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cloud Kitchen not found");
        }
        updatedKitchen.setKitchenId(id);
        cloudKitchenRepository.save(updatedKitchen);
        return ResponseEntity.ok("Cloud Kitchen updated successfully");
    }

    @Override
    public ResponseEntity<String> updateHygieneRating(Integer id, Integer hygieneRating) {
        return updateField(id, "Hygiene Rating", hygieneRating, CloudKitchen::setHygieneRating);
    }

    @Override
    public ResponseEntity<String> updateManagerName(Integer id, String managerName) {
        return updateField(id, "Manager Name", managerName, CloudKitchen::setManagerName);
    }

    @Override
    public ResponseEntity<String> updateLocation(Integer id, String location) {
        return updateField(id, "Location", location, CloudKitchen::setLocation);
    }

    @Override
    public ResponseEntity<String> updateCuisineType(Integer id, String cuisineType) {
        return updateField(id, "Cuisine Type", cuisineType, CloudKitchen::setCuisineType);
    }

    @Override
    public ResponseEntity<String> updateOperatingTime(Integer id, String operatingTime) {
        return updateField(id, "Operating Time", operatingTime, CloudKitchen::setOperatingTime);
    }

    @Override
    public ResponseEntity<String> updateRegion(Integer id, String region) {
        return updateField(id, "Region", region, CloudKitchen::setRegion);
    }

    @Override
    public ResponseEntity<String> updateCountry(Integer id, String country) {
        return updateField(id, "Country", country, CloudKitchen::setCountry);
    }

    @Override
    public ResponseEntity<String> updateState(Integer id, String state) {
        return updateField(id, "State", state, CloudKitchen::setState);
    }

    @Override
    public ResponseEntity<String> updateCity(Integer id, String city) {
        return updateField(id, "City", city, CloudKitchen::setCity);
    }

    @Override
    public ResponseEntity<String> updatePostalCode(Integer id, String postalCode) {
        return updateField(id, "Postal Code", postalCode, CloudKitchen::setPostalCode);
    }

    @Override
    public ResponseEntity<String> updateGoogleMapsLocation(Integer id, String googleMapsLocation) {
        return updateField(id, "Google Maps Location", googleMapsLocation, CloudKitchen::setGoogleMapsLocation);
    }

    @Override
    public ResponseEntity<String> updateGstNumber(Integer id, String gstNumber) {
        return updateField(id, "GST Number", gstNumber, CloudKitchen::setGstNumber);
    }

    @Override
    public ResponseEntity<String> updatePaymentMethods(Integer id, String paymentMethods) {
        return updateField(id, "Payment Methods", paymentMethods, CloudKitchen::setPaymentMethods);
    }

    @Override
    public ResponseEntity<String> updateFssaiLicenseDocument(Integer id, MultipartFile fssaiLicenseDocument) {
        return updateFileField(id, "FSSAI Document", fssaiLicenseDocument, CloudKitchen::setFssaiLicenseDocument);
    }

    @Override
    public ResponseEntity<String> updateNecessaryDocuments(Integer id, MultipartFile necessaryDocuments) {
        return updateFileField(id, "Other Documents", necessaryDocuments, CloudKitchen::setNecessaryDocument);
    }

    private <T> ResponseEntity<String> updateField(Integer id, String fieldName, T value, FieldUpdater<T> updater) {
        Optional<CloudKitchen> existingKitchenOpt = cloudKitchenRepository.findById(id);
        if (existingKitchenOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cloud Kitchen not found");
        }
        CloudKitchen existingKitchen = existingKitchenOpt.get();
        updater.update(existingKitchen, value);
        cloudKitchenRepository.save(existingKitchen);
        return ResponseEntity.ok(fieldName + " updated successfully to " + value);
    }

    private ResponseEntity<String> updateFileField(Integer id, String fieldName, MultipartFile file, FileUpdater updater) {
        Optional<CloudKitchen> existingKitchenOpt = cloudKitchenRepository.findById(id);
        if (existingKitchenOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cloud Kitchen not found");
        }
        try {
            CloudKitchen existingKitchen = existingKitchenOpt.get();
            updater.update(existingKitchen, file.getBytes());
            cloudKitchenRepository.save(existingKitchen);
            return ResponseEntity.ok(fieldName + " updated successfully");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing file: " + e.getMessage());
        }
    }

    @FunctionalInterface
    private interface FieldUpdater<T> {
        void update(CloudKitchen kitchen, T value);
    }

    @FunctionalInterface
    private interface FileUpdater {
        void update(CloudKitchen kitchen, byte[] fileData);
    }
}
