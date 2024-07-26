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
        // Service call for getting profiles from email
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

    public boolean updateUserAccount() {
        // Service call for updating user account
        return true;
    }

    public boolean deleteUserAccount() {
        // Service call for deleting user account
        return true;
    }

    public User createAccount() {
        // Service call for creating user account
        return null;
    }
}
