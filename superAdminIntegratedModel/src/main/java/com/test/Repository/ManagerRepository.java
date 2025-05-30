package com.test.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.test.Entities.Manager;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface ManagerRepository extends JpaRepository<Manager, UUID> {
 
	List<Manager> findByCloudKitchenIdAndStatus(int cloudKitchenId, Manager.Status status);

    Optional<Manager> findTopByManagerIdAndStatusOrderByStartDateDesc(UUID managerId, Manager.Status status);
}
