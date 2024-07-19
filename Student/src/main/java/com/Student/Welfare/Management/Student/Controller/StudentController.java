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

import com.Student.Welfare.Management.Student.Services.StudentService;
import com.Student.Welfare.Management.Student.model.Student;


@RestController
@RequestMapping("api/student")
public class StudentController {

     @Autowired
    private StudentService studentService;
   
   

    @PostMapping
    public ResponseEntity<Student> createStudent(@RequestBody Student student){
        Student savedStudent = studentService.createStudent(student);
        return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Student>> getAllStudent(){
        List<Student> student = studentService.getAllStudent();
        return new ResponseEntity<>(student, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable("id") Long studentId){
        Student student = studentService.getStudentById(studentId);
        return new ResponseEntity<>(student, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable("id") Long student){
        studentService.deleteStudent(student);
        return new ResponseEntity<String>("Student tear amesha futika ", HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable("id") Long studentId, @RequestBody Student student){

        Student updatedStudent = studentService.updateStudent(studentId, student);
        return new ResponseEntity<>(updatedStudent, HttpStatus.OK);

    } 

}



