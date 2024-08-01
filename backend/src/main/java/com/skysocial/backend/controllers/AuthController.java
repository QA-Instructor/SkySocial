package com.skysocial.backend.controllers;


import com.skysocial.backend.dtos.user.LoginDTO;
import com.skysocial.backend.dtos.user.ProfileDTO;
import com.skysocial.backend.entities.user.User;
import com.skysocial.backend.security.JwtUtil;
import com.skysocial.backend.services.AuthService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@NoArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/createAuthAccount")
    public ResponseEntity<?> createAccount(@RequestBody @Valid User user) {
        System.out.println("Trying to print user");
        return ResponseEntity.ok(this.authService.register(user));
    }

    @GetMapping("/authhealth")
    public String health() {
        System.out.println("Health");
        return "AuthController is running";
    }

    @PostMapping("/authLogin")
    public ResponseEntity<?> login(@RequestBody LoginDTO credentials){
        System.out.println("Trying to get user");
        System.out.println(credentials.getUserPassword()+ " --  " + credentials.getEmail());
        LoginDTO existingUser = this.authService.getProfileByEmail(credentials.getEmail());
        System.out.println(existingUser.getUserPassword());
        if (existingUser != null && this.authService.getPasswordEncoder().matches(credentials.getUserPassword(), existingUser.getUserPassword())){
            System.out.println("Trying to log in");
            String token = JwtUtil.generateToken(existingUser.getEmail());
            System.out.println("token = " + token);
            return ResponseEntity.ok(token);
        }
        return ResponseEntity.status(401).body("Invalid Credentials");
    }



}
