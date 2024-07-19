package com.Student.Welfare.Management.Student.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Student.Welfare.Management.Student.Repository.DeanRepository;
import com.Student.Welfare.Management.Student.model.Dean;

@Service
public class DeanService {
@Autowired
    private DeanRepository deanRepo;


    public Dean createDean(Dean dean){
        return deanRepo.save(dean);
        }
    
        public List<Dean> getAllDean(){
            return deanRepo.findAll();
        }
    
        public Dean getDeanById(Long dean){
            Optional<Dean> deanId =deanRepo.findById(dean);
            return deanId.get();
        }
        public void deleteDean(Long dean){
            deanRepo.deleteById(dean);
        }
    
        public Dean updatDean(Long deanId, Dean dean){
           Dean oldUser=deanRepo.findById(deanId).orElseThrow();
           oldUser.setFullName(dean.getFullName());
           oldUser.setPhoneNumber(dean.getPhoneNumber());
           oldUser.setEmail(dean.getEmail());
           oldUser.setRole(dean.getRole());
           oldUser.setOfficeLocation(dean.getOfficeLocation());
    
           Dean updatedDean =deanRepo.save(oldUser);
            return updatedDean;
           
        }
    }
    


  




    
