package com.Student.Welfare.Management.Student.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Student.Welfare.Management.Student.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long>{
    
}