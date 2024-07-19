package com.Student.Welfare.Management.Student.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.Student.Welfare.Management.Student.model.Notification;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {
}
