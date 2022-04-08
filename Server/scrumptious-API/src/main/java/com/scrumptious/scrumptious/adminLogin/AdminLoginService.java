package com.scrumptious.scrumptious.adminLogin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminLoginService {
    @Autowired
    private final AdminLoginRepository adminLoginRepository;

    public AdminLoginService(AdminLoginRepository adminLoginRepository) {
        this.adminLoginRepository = adminLoginRepository;
    }

    public List<AdminLogin> getAllUsers(){
        return adminLoginRepository.findAll();
    }

    public AdminLogin longin(String username, String password){

        AdminLogin adminLogin = adminLoginRepository.findByUsernameAndPassword(username,password);
        System.out.println(adminLogin);
        return adminLogin;
    }
}
