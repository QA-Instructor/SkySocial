package com.skysocial.backend.services;


import com.skysocial.backend.entities.User;
import com.skysocial.backend.entities.UserRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepo repo;

    public UserService(UserRepo repo) {
        this.repo = repo;
    }

    public void getLoginCredentials() {
        // Service call for getting login credentials
    }

    public User getProfileByEmail(String email) {
        return this.repo.findByEmail(email);
    }

    //list of events
    public List<String> getRegisteredUserEvents() {
        // Service call for getting events the user is registered to
        return null;
    }

    //list of events
    public List<String> getCreatedUserEvents() {
        // Service call for getting events the user is registered to
        return null;
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

    public User createAccount(User user) {
        // Change to profileDTO
        User savedUser = this.repo.save(user);
        return savedUser;
    }
}
