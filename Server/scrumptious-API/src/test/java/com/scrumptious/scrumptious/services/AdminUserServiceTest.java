package com.scrumptious.scrumptious.services;

import com.scrumptious.scrumptious.models.AdminUser;
import com.scrumptious.scrumptious.repositories.AdminUserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AdminUserServiceTest {
    @MockBean
    private AdminUserService adminUserService;
    @MockBean
    private AdminUserRepository adminUserRepository;

    @Test
    void register() {
        AdminUser adminUser = new AdminUser("H","1234");
        adminUserService.register(adminUser);

        String createdUserName = adminUser.getUsername();
        Optional<AdminUser> registeredUser = adminUserRepository.findByUsername("H");

        if(registeredUser.isPresent()){
            AdminUser testUser = registeredUser.get();
            String loggedInUserName = testUser.getUsername();

            assertEquals(createdUserName, loggedInUserName);
        }


    }

    @Test
    void login() {
        AdminUser loggedInUser = adminUserService.login("Alan", "tekcamp");

        Optional<AdminUser> registeredUser = adminUserRepository.findByUsername("Alan");

        if(registeredUser.isPresent()){
            AdminUser expectedUser = registeredUser.get();

            assertEquals(loggedInUser, expectedUser);
        }
    }

    @Test
    void getAllUsers() {
        List<AdminUser> adminUserList = adminUserService.getAllUsers();

        assertNotNull(adminUserList);
    }
}