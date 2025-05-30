package com.test.Service;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.test.Entities.Manager;
import com.test.Repository.ManagerRepository;

@Service
public class ManagerService {
    @Autowired
    private ManagerRepository managerRepository;

    private static final String UPLOAD_DIRECTORY = "uploads/manager/";

    public Manager registerManager(Manager manager) {
        manager.setManagerId(UUID.randomUUID());
        manager.setPassword(generateNewPassword());
        return managerRepository.save(manager);
    }

    public Manager updateManager(UUID managerId, Manager updatedManager) {
        Manager existingManager = managerRepository.findTopByManagerIdAndStatusOrderByStartDateDesc(managerId, Manager.Status.ACTIVE)
                .orElseThrow(() -> new RuntimeException("Manager not found"));

        // Deactivate old manager
        existingManager.setStatus(Manager.Status.INACTIVE);
        existingManager.setEndDate(LocalDateTime.now());
        managerRepository.save(existingManager);

        // Create new manager record with the same kitchen ID
        updatedManager.setRecordId(UUID.randomUUID());
        updatedManager.setManagerId(managerId);
        updatedManager.setCloudKitchenId(existingManager.getCloudKitchenId());
        updatedManager.setPassword(generateNewPassword());
        updatedManager.setStartDate(LocalDateTime.now());
        updatedManager.setStatus(Manager.Status.ACTIVE);

        return managerRepository.save(updatedManager);
    }

    public String uploadProfilePicture(UUID managerId, MultipartFile file) throws IOException {
        File directory = new File(UPLOAD_DIRECTORY);
        if (!directory.exists()) {
            directory.mkdirs();  // ✅ Automatically create directory if not present
        }

        String filePath = UPLOAD_DIRECTORY + managerId + "_profile.jpg";
        file.transferTo(new File(filePath));

        Manager manager = managerRepository.findById(managerId).orElseThrow(() -> new RuntimeException("Manager not found"));
        manager.setProfilePicturePath(filePath);
        managerRepository.save(manager);

        return filePath;
    }

    public String uploadAadharCard(UUID managerId, MultipartFile file) throws IOException {
        File directory = new File(UPLOAD_DIRECTORY);
        if (!directory.exists()) {
            directory.mkdirs();  // ✅ Automatically create directory if not present
        }

        String filePath = UPLOAD_DIRECTORY + managerId + "_aadhar.jpg";
        file.transferTo(new File(filePath));

        Manager manager = managerRepository.findById(managerId).orElseThrow(() -> new RuntimeException("Manager not found"));
        manager.setAadharCardPath(filePath);
        managerRepository.save(manager);

        return filePath;
    }

    private String generateNewPassword() {
        return "MGR" + UUID.randomUUID().toString().substring(0, 8);
    }
}
