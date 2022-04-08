package com.scrumptious.scrumptious.adminLogin;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminLoginRepository extends JpaRepository<AdminLogin,Integer> {
    AdminLogin findByUsernameAndPassword(String username, String password);
}
