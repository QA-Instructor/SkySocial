package com.skysocial.backend.controllers;


import com.skysocial.backend.dtos.user.LoginDTO;
import com.skysocial.backend.dtos.user.ProfileDTO;
import com.skysocial.backend.entities.user.User;
import com.skysocial.backend.security.JwtUtil;
import com.skysocial.backend.services.AuthService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/createAccount")
    public ResponseEntity<?> createAccount(@RequestBody @Valid User user) {
        return ResponseEntity.ok(this.authService.register(user));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDTO credentials){
        LoginDTO existingUser = this.authService.getProfileByEmail(credentials.getEmail());

        if (existingUser != null && this.authService.getPasswordEncoder().matches(credentials.getUserPassword(), existingUser.getUserPassword())){
            String token = JwtUtil.generateToken(existingUser.getEmail());
            return ResponseEntity.ok(token);
        }
        return ResponseEntity.status(401).body("Invalid Credentials");
    }



}
