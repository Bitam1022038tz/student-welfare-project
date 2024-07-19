package com.Student.Welfare.Management.Student.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.Student.Welfare.Management.Student.model.Notification;
import com.Student.Welfare.Management.Student.Repository.NotificationRepository;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository notificationRepo;

    public Notification createNotification(Notification notification) {
        return notificationRepo.save(notification);
    }

    public List<Notification> getAllNotifications() {
        return notificationRepo.findAll();
    }

    public Optional<Notification> getNotificationById(Long id) {
        return notificationRepo.findById(id);
    }

    public void deleteNotification(Long id) {
        notificationRepo.deleteById(id);
    }

    @Transactional
    public Notification updateNotification(Long id, Notification notification) {
        Notification existingNotification = notificationRepo.findById(id).orElse(null);
        if (existingNotification != null) {
            existingNotification.setFullName(notification.getFullName());
            existingNotification.setRole(notification.getRole());
            existingNotification.setMessage(notification.getMessage());
        }
        return existingNotification;
    }
}
