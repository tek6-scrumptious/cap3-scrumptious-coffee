package com.scrumptious.scrumptious.controllers;

import com.scrumptious.scrumptious.models.User;
import com.scrumptious.scrumptious.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @CrossOrigin
    @GetMapping
    public List<User> getUser(){
        return userService.getAllUsers();
    }


    @CrossOrigin
    @PostMapping("/login")
    public User addUser(@RequestParam(value = "email") String email,
                           @RequestParam(value = "password" )String password){
        User user = userService.login(email,password);
        return user;
    }

    @CrossOrigin
    @PostMapping("/register")
    public User register(
            @RequestParam(value = "email") String email,
            @RequestParam(value = "password") String password
    ){
        User user = new User(email,password);
        return userService.register(user);
    }


}
