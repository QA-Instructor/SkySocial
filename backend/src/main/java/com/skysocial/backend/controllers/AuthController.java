package com.skysocial.backend.controllers;


import com.skysocial.backend.dtos.user.LoginDTO;
import com.skysocial.backend.dtos.user.ProfileDTO;
import com.skysocial.backend.entities.user.User;
import com.skysocial.backend.security.JwtUtil;
import com.skysocial.backend.services.AuthService;
import com.skysocial.backend.services.UserService;
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

    @Autowired
    private UserService userService;

    private JwtUtil jwtUtil = new JwtUtil();

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
        LoginDTO existingUser = this.authService.getProfileByEmail(credentials.getEmail());
        System.out.println("user: " + existingUser.getEmail());
        if (existingUser != null && this.authService.getPasswordEncoder().matches(credentials.getUserPassword(), existingUser.getUserPassword())){
            String token = JwtUtil.generateToken(existingUser.getEmail());
            return ResponseEntity.ok(token);
        }
        return ResponseEntity.status(401).body("Invalid Credentials");
    }

    @GetMapping("/getOrganiser")
    public Long getOrganiserId(@RequestParam(name = "token", defaultValue = "") String token){
        System.out.println("Organiser");
        String email = this.jwtUtil.extractEmail(token);
        return this.userService.getProfileByEmail(email).getId();

    }

    @GetMapping("/getEmailById")
    public String getEmailFromId(@RequestParam(name = "id", defaultValue = "") String token){
        return this.jwtUtil.extractEmail(token);

    }


}
