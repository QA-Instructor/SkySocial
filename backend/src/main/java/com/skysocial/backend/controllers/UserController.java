package com.skysocial.backend.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @GetMapping("/health")
    public String health() {
        return "User Controller is up and running";
    }

    @GetMapping("/getlogincred")
    public void getLoginCredentials() {
        // Service call for getting login credentials
    }

    @GetMapping("/getbyemail")
    public void getProfileByEmail() {
        // Service call for getting profiles from email
    }

    @GetMapping("/getregisteredevents")
    public void getRegisteredUserEvents() {
        // Service call for getting events the user is registered to
    }

    @GetMapping("/getcreatedevents")
    public void getCreatedUserEvents() {
        // Service call for getting events the user is registered to
    }

    @PutMapping("/updateaccount")
    public void updateUserAccount() {
        // Service call for updating user account
    }

    @DeleteMapping("/deleteaccount")
    public void deleteUserAccount() {
        // Service call for deleting user account
    }

    @PostMapping("/createaccount")
    public void createAccount() {
        // Service call for creating user account
    }
}
