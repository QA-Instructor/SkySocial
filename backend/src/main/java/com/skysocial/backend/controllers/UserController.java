package com.skysocial.backend.controllers;

import com.skysocial.backend.dtos.user.LoginDTO;
import com.skysocial.backend.dtos.user.ProfileDTO;
import com.skysocial.backend.entities.user.User;
import com.skysocial.backend.services.UserService;
import jakarta.validation.Valid;
import jakarta.websocket.server.PathParam;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@NoArgsConstructor
@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://13.41.210.250:3000"})
public class UserController {

    private UserService service;

    @Autowired
    public UserController(UserService service){
        super();
        this.service = service;
    }

    @GetMapping("/health")
    public String health() {
        return "User Controller is up and running";
    }

    @GetMapping("/getByEmail")
    public ProfileDTO getProfileByEmail(@RequestParam String email) {
        return this.service.getProfileByEmail(email);
    }

    @PutMapping("/updateAccount")
    public User updateUserAccount(@RequestBody User user) {
        return this.service.updateUserAccount(user.getId(), user);
    }

    @DeleteMapping("/deleteAccount")
    public boolean deleteUserAccount(@PathParam("id") Long id) {
        return this.service.deleteUserAccount(id);
    }

    @PostMapping("/createAccount")
    public ProfileDTO createAccount(@RequestBody @Valid User user) {
        return this.service.createAccount(user);
    }

    @PostMapping("/login")
    public boolean login(@RequestBody LoginDTO credentials){
        return this.service.getLoginCredentials(credentials.getEmail(), credentials.getUserPassword());
    }

}
