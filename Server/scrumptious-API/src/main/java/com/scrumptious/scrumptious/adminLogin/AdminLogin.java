package com.scrumptious.scrumptious.adminLogin;


import lombok.Getter;

import javax.persistence.*;

@Entity
@Table(name = "admin_login")
public class AdminLogin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Column(name = "admin_login_id")
    private Integer id;

    @Getter
    @Column(name = "username")
    private String username;

    @Getter
    @Column(name = "password")
    private String password;

    public AdminLogin() {
    }
}
