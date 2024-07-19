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
@Table(name= "Dean")
@Setter
@Getter
@RequiredArgsConstructor
public class Dean {
@Id

@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
private String fullName;
private String phoneNumber;
private String email;
private String role;
private String officeLocation;


}
