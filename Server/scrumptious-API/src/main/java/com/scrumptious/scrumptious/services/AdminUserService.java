package com.scrumptious.scrumptious.services;

import com.scrumptious.scrumptious.models.AdminUser;
import com.scrumptious.scrumptious.repositories.AdminUserRepository;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminUserService {

    @Autowired
    private final AdminUserRepository adminUserRepo;

    public AdminUserService(AdminUserRepository adminUserRepo) {
        this.adminUserRepo = adminUserRepo;
    }

    public AdminUser register(AdminUser newAdmin) {
            String hashed = BCrypt.hashpw(newAdmin.getPassword(), BCrypt.gensalt());
            newAdmin.setPassword(hashed);
            return adminUserRepo.save(newAdmin);
        }

    public AdminUser login(String username , String password) {
        Optional<AdminUser> potentialAdmin = adminUserRepo.findByUsername(username);
        if(!potentialAdmin.isPresent()) {
            return null;
        }
        AdminUser adminUser = potentialAdmin.get();
        if(!BCrypt.checkpw(password, adminUser.getPassword())) {
            return null;
        } else {
            return adminUser;
        }
    }

        public List<AdminUser> getAllUsers(){
        return adminUserRepo.findAll();
    }

    
}
