package com.Student.Welfare.Management.Student.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Student.Welfare.Management.Student.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long>{
    
}
