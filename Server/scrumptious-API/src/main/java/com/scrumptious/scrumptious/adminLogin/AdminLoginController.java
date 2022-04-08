package com.scrumptious.scrumptious.adminLogin;


import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminLoginController {
    private final AdminLoginService adminLoginService;

    public AdminLoginController(AdminLoginService adminLoginService) {
        this.adminLoginService = adminLoginService;
    }
    @CrossOrigin
    @GetMapping
    public List<AdminLogin> getAllAdmins(){
        return adminLoginService.getAllUsers();
    }

    @CrossOrigin
    @PostMapping("/login")
    public AdminLogin login(@RequestParam String username, @RequestParam String password){
        return adminLoginService.longin(username,password);
    }
}
