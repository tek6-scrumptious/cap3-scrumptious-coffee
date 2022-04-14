package com.scrumptious.scrumptious.services;

import com.scrumptious.scrumptious.models.User;
import com.scrumptious.scrumptious.repositories.UserRepository;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class UserServiceTest {

    @MockBean
    private UserService userService;
    @MockBean
    private UserRepository userRepository;
    @Test
    void register() {
        User user = new User();
        user.setPassword("1234");
        user.setEmail("fakeEmail@fake.com");

        userService.register(user);
        Optional<User> savedUser = userRepository.findByEmail("fakeEmail@fake.com");

        if(savedUser.isPresent()){
            User testUser = savedUser.get();
            String testUserEmail = testUser.getEmail();
            assertEquals(testUserEmail,"fakeEmail@fake.com");
        }
    }

    @Test
    void login() {
        User testUser = userService.login("bill@yahoo.com", "bill");

        Optional<User> findUser = userRepository.findByEmail("bill@yahoo.com");

        if(findUser.isPresent()){
            User expectedUser = findUser.get();

            assertEquals(testUser,expectedUser);
        }

    }

    @Test
    void getAllUsers() {
        List<User> userList = userService.getAllUsers();
        assertNotNull(userList);
    }
}