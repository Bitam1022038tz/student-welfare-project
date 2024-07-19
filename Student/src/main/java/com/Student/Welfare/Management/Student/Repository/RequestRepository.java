package com.Student.Welfare.Management.Student.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Student.Welfare.Management.Student.model.Request;

public interface RequestRepository extends JpaRepository<Request, Long>{
    
}
