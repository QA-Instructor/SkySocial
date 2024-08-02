package com.skysocial.backend.services;

import com.skysocial.backend.dtos.user.LoginDTO;
import com.skysocial.backend.dtos.user.ProfileDTO;
import com.skysocial.backend.entities.user.User;
import com.skysocial.backend.repos.UserRepo;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import lombok.Data;

@Service
@AllArgsConstructor
@Data
public class AuthService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ModelMapper mapper;

    public ProfileDTO register(User user) {
        user.setUserPassword(passwordEncoder.encode(user.getUserPassword()));
        User savedUser = this.userRepo.save(user);
        return this.mapper.map(savedUser, ProfileDTO.class);
    }

    public LoginDTO getProfileByEmail(String email) {
        System.out.println("Email: " + email);
        User savedUser = this.userRepo.findByEmail(email);

        //Change for better error handling
        if (savedUser == null) return new LoginDTO();

        return this.mapper.map(savedUser, LoginDTO.class);
    }
    public ProfileDTO getUserProfileByEmail(String email) {
        User savedUser = this.userRepo.findByEmail(email);

        //Change for better error handling
        if (savedUser == null) return new ProfileDTO();
        return this.mapper.map(savedUser, ProfileDTO.class);
    }


}
