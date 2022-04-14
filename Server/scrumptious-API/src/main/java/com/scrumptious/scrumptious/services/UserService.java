package com.scrumptious.scrumptious.services;

import com.scrumptious.scrumptious.models.User;
import com.scrumptious.scrumptious.repositories.UserRepository;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User register(User user){
        String hashed = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
        user.setPassword(hashed);
        return userRepository.save(user);
    }

    public User login(String email, String password){
        Optional<User> potentialUser = userRepository.findByEmail(email);
        if(!potentialUser.isPresent()){
            return null;
        }
        User user = potentialUser.get();
        if(!BCrypt.checkpw(password,user.getPassword())){
            return null;
        }
        else{
            return user;
        }
    }

    public List<User> getAllUsers(){return userRepository.findAll();}
}
