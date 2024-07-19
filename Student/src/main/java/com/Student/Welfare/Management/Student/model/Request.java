package com.Student.Welfare.Management.Student.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Request")
@Setter
@Getter
@RequiredArgsConstructor
public class Request {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
private String studentNames;
private String studentEmail;
private String requestDate;
private String requestTime;
private String purpose;
private String status;




    
}
