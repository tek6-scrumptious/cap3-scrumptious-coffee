package com.scrumptious.scrumptious.models;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Table(name = "admin_user")
public class AdminUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Column(name = "admin_user_id")
    private Integer id;

    @Getter
    @Column(name = "username")
    private String username;

    @Getter @Setter
    @Column(name = "password")
    private String password;

    public AdminUser(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
