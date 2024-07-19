package com.Student.Welfare.Management.Student.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.Student.Welfare.Management.Student.Repository.AppointmentRepository;
import com.Student.Welfare.Management.Student.model.Appointment;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentRepository appointmentRepo;

    public Appointment createAppointment(Appointment appointment) {
        return appointmentRepo.save(appointment);
    }

    public List<Appointment> getAllAppointments() {
        return appointmentRepo.findAll();
    }

    public Appointment getAppointmentById(Long appointmentId) {
        Optional<Appointment> appointment = appointmentRepo.findById(appointmentId);
        return appointment.orElse(null);
    }

    public void deleteAppointment(Long appointmentId) {
        appointmentRepo.deleteById(appointmentId);
    }

    @Transactional
    public Appointment updateAppointment(Long appointmentId, Appointment appointment) {
        Appointment oldAppointment = appointmentRepo.findById(appointmentId).orElseThrow(null);
        oldAppointment.setFullName(appointment.getFullName());
        oldAppointment.setRole(appointment.getRole());
        oldAppointment.setAppointmentDate(appointment.getAppointmentDate());
        oldAppointment.setAppointmentTime(appointment.getAppointmentTime());
        oldAppointment.setOfficeLocation(appointment.getOfficeLocation());
        return appointmentRepo.save(oldAppointment);
    }
}
