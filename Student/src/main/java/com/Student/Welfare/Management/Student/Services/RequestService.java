package com.Student.Welfare.Management.Student.Services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Student.Welfare.Management.Student.Repository.RequestRepository;
import com.Student.Welfare.Management.Student.model.Request;

@Service
public class RequestService {
@Autowired
      private RequestRepository requestRepo;


      public Request createRequest(Request request){
        return requestRepo.save(request);
        }
    
        public List<Request> getAllRequest(){
            return requestRepo.findAll();
        }
    
        public Request getRequestById(Long request){
            Optional<Request> requestId =requestRepo.findById(request);
            return requestId.get();
        }
        public void deleteRequest(Long request){
            requestRepo.deleteById(request);
        }
    
        public Request updatRequest(Long requestId, Request request){
           Request oldUser=requestRepo.findById(requestId).orElseThrow();
           oldUser.setStudentNames(request.getStudentNames());
           oldUser.setRequestDate(request.getRequestDate());
           oldUser.setRequestTime(request.getRequestTime());
           oldUser.setStudentEmail(request.getStudentEmail());
           oldUser.setPurpose(request.getPurpose());
    
    
           Request updatedRequest =requestRepo.save(oldUser);
            return updatedRequest;
           
        }
    }
    
