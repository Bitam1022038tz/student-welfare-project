package com.Student.Welfare.Management.Student.Services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.Student.Welfare.Management.Student.Repository.StudentRepository;
import com.Student.Welfare.Management.Student.model.Student;

@Service
public class StudentService {
@Autowired
    private StudentRepository studentRepo;


    public Student createStudent(Student student){
        return studentRepo.save(student);
    }

    public List<Student> getAllStudent(){
        return studentRepo.findAll();
    }

    public Student getStudentById(Long student){
        Optional<Student> studentId  = studentRepo.findById(student);
        return studentId.get();

    }

    public void deleteStudent(Long student){
        studentRepo.deleteById(student);
    }

    @Transactional
    public Student updateStudent(Long studentId, Student student){
        Student oldUser = studentRepo.findById(studentId).orElseThrow(null);
        oldUser.setFirstName(student.getFirstName());
        oldUser.setLastName(student.getLastName());
        oldUser.setEmail(student.getEmail());
        oldUser.setCampassName(student.getCampassName());
        oldUser.setGender(student.getGender());
        oldUser.setPhoneNumber(student.getPhoneNumber());

        Student updatedStudent = studentRepo.save(oldUser);
        return updatedStudent;
    }
}


    
