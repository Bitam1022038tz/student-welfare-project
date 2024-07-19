package com.Student.Welfare.Management.Student.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Student.Welfare.Management.Student.Repository.CouncelorRepository;
import com.Student.Welfare.Management.Student.model.Councelor;

@Service
public class CouncelorService {
@Autowired
   private CouncelorRepository councelorRepo;

   public Councelor createCouncelor(Councelor councelor){
    return councelorRepo.save(councelor);
    }

    public List<Councelor> getAllCouncelor(){
        return councelorRepo.findAll();
    }

    public Councelor getCouncelorById(Long councelor){
        Optional<Councelor> councelorId =councelorRepo.findById(councelor);
        return councelorId.get();
    }
    public void deleteCouncelor(Long councelor){
        councelorRepo.deleteById(councelor);
    }

    public Councelor updatCouncelor(Long councelorId, Councelor councelor){
       Councelor oldCouncelor=councelorRepo.findById(councelorId).orElseThrow();
       oldCouncelor.setFirstName(councelor.getFirstName());
       oldCouncelor.setLastName(councelor.getLastName());
       oldCouncelor.setEmail(councelor.getEmail());
       oldCouncelor.setPhoneNumber(councelor.getPhoneNumber());
       oldCouncelor.setPlace(councelor.getPlace());

       Councelor updatedCouncelor =councelorRepo.save(oldCouncelor);
        return updatedCouncelor;
       
    }

}



