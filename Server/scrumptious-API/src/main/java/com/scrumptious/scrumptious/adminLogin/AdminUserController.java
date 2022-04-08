package com.scrumptious.scrumptious.adminLogin;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminUserController {
    @Autowired
    private final AdminUserService adminUserService;

    public AdminUserController(AdminUserService adminUserService) {
        this.adminUserService = adminUserService;
    }


    @CrossOrigin
    @GetMapping
    public List<AdminUser> getAllAdmins(){
        return adminUserService.getAllUsers();
    }

    @CrossOrigin
    @PostMapping("/register")
    public AdminUser register(
        @RequestParam(value="user_name") String username,
        @RequestParam(value="password") String password){
        AdminUser adminUser = new AdminUser(username,password );
        return adminUserService.register(adminUser);
    }

    @CrossOrigin
    @PostMapping("/login")
    public AdminUser login(
            @RequestParam(value="user_name") String username,
            @RequestParam(value="password") String password
          ){
        AdminUser adminUser = adminUserService.login(username, password);
        return adminUser;
    }
}
