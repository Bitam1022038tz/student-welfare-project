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

import com.Student.Welfare.Management.Student.Services.CouncelorService;
import com.Student.Welfare.Management.Student.model.Councelor;

@RestController
@RequestMapping("api/councelor")

public class CouncelorController {
    @Autowired
    private CouncelorService councelorService;

    
      @PostMapping
    public ResponseEntity<Councelor> createCouncelor(@RequestBody Councelor councelor){
        Councelor savedCouncelor = councelorService.createCouncelor(councelor);
        return new ResponseEntity<>(savedCouncelor, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Councelor>> getAllCouncelor(){
        List<Councelor> councelor= councelorService.getAllCouncelor();
        return new ResponseEntity<>(councelor, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Councelor> getCouncelorById(@PathVariable("id") Long councelorId){
        Councelor councelor = councelorService.getCouncelorById(councelorId);
        return new ResponseEntity<>(councelor, HttpStatus.OK);
    }

     @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCouncelor(@PathVariable("id") Long councelor){
        councelorService.deleteCouncelor(councelor);
        return new ResponseEntity<String>("Councelor tear amesha futika ", HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Councelor> updateCouncelor(@PathVariable("id") Long councelorId, @RequestBody Councelor councelor){

        Councelor updatedCouncelor = councelorService.updatCouncelor(councelorId, councelor);
        return new ResponseEntity<>(updatedCouncelor, HttpStatus.OK);

    } 

}
