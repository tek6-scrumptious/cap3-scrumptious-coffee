package com.scrumptious.scrumptious.controllers;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(AdminUserController.class)
class AdminUserControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private AdminUserController adminUserController;

    @Test
    void getAllAdmins() throws Exception {

        this.mockMvc.perform(get("/admin/")).andExpect(status().isOk());

    }

    @Test
    void register() {
    }

    @Test
    void login() {
    }
}