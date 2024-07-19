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

import com.Student.Welfare.Management.Student.Services.RequestService;
import com.Student.Welfare.Management.Student.model.Request;

@RestController
@RequestMapping("api/request")
public class RequestController {

    @Autowired
    private RequestService requestService;
    

     @PostMapping
    public ResponseEntity<Request> createRequest(@RequestBody Request request){
        Request savedRequest = requestService.createRequest(request);
        return new ResponseEntity<>(savedRequest, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Request>> getAllRequest(){
        List<Request> request = requestService.getAllRequest();
        return new ResponseEntity<>(request, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Request> getRequestById(@PathVariable("id") Long requestId){
        Request request = requestService.getRequestById(requestId);
        return new ResponseEntity<>(request, HttpStatus.OK);
    }

    
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRequest(@PathVariable("id") Long request){
        requestService.deleteRequest(request);
        return new ResponseEntity<String>("Request tear amesha futika ", HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Request> updateRequest(@PathVariable("id") Long requestId, @RequestBody Request request){

        Request updatedRequest = requestService.updatRequest(requestId, request);
        return new ResponseEntity<>(updatedRequest, HttpStatus.OK);

    } 

}

