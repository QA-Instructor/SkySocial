package com.skysocial.backend.services;


import com.skysocial.backend.dtos.event.EventDTO;
import com.skysocial.backend.dtos.user.LoginDTO;
import com.skysocial.backend.dtos.user.ProfileDTO;
import com.skysocial.backend.entities.user.User;
import com.skysocial.backend.repos.UserRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepo repo;

    public UserService(UserRepo repo) {
        this.repo = repo;
    }

    public boolean getLoginCredentials(String email, String password) {
        User user = this.repo.findByEmail(email);
        return user.getPassword().equals(password);
    }

    public User getProfileByEmail(String email) {
        return this.repo.findByEmail(email);
    }

    public User updateUserAccount(Long id, User user) {
        Optional<User> optional = this.repo.findById(id);
        User existingUser = optional.get();
        existingUser.setFirstName(user.getFirstName());
        existingUser.setLastName(user.getLastName());
        existingUser.setPassword(user.getPassword());
        existingUser.setEmail(user.getEmail());
        existingUser.setPhone(user.getPhone());
        return this.repo.save(existingUser);
    }

    public boolean deleteUserAccount(Long id) {
        this.repo.deleteById(id);
        return !this.repo.existsById(id);
    }

    public ProfileDTO createAccount(User user) {
        User savedUser = this.repo.save(user);
    }
}
