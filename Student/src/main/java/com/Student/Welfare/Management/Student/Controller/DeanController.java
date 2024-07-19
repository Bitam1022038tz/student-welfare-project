package com.Student.Welfare.Management.Student.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Student.Welfare.Management.Student.Services.DeanService;
import com.Student.Welfare.Management.Student.model.Dean;
@RestController
@RequestMapping("api/dean")
public class DeanController {
    @Autowired
    private DeanService deanService;

     @PostMapping
    public ResponseEntity<Dean> createDean(@RequestBody Dean dean){
        Dean savedDean = deanService.createDean(dean);
        return new ResponseEntity<>(savedDean, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Dean>> getAllDean(){
        List<Dean> dean = deanService.getAllDean();
        return new ResponseEntity<>(dean, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Dean> getDeanById(@PathVariable("id") Long deanId){
        Dean dean = deanService.getDeanById(deanId);
        return new ResponseEntity<>(dean, HttpStatus.OK);
    }

    
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteDean(@PathVariable("id") Long dean){
        deanService.deleteDean(dean);
        return new ResponseEntity<String>("Dean tear amesha futika ", HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Dean> updateDean(@PathVariable("id") Long deanId, @RequestBody Dean dean){

        Dean updatedDean = deanService.updatDean(deanId, dean);
        return new ResponseEntity<>(updatedDean, HttpStatus.OK);

    } 

}



