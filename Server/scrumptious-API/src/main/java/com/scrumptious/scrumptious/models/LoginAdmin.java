package com.scrumptious.scrumptious.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



public class LoginAdmin {

    @Getter @Setter
    private String username;

    @Getter @Setter
    private String password;

    public LoginAdmin(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
