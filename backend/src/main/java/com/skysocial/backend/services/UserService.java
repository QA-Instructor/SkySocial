package com.skysocial.backend.services;

import com.skysocial.backend.dtos.user.ProfileDTO;
import com.skysocial.backend.entities.user.User;
import com.skysocial.backend.repos.UserRepo;
import lombok.Data;
import org.springframework.stereotype.Service;
import org.modelmapper.ModelMapper;

import java.util.Optional;

@Service
@Data
public class UserService {

    private final UserRepo repo;
    private ModelMapper mapper;

    public UserService(ModelMapper mapper, UserRepo repo) {
        super();
        this.mapper = mapper;
        this.repo = repo;
    }

    public boolean getLoginCredentials(String email, String password) {
        User user = this.repo.findByEmail(email);
        return user.getUserPassword().equals(password);
    }

    public ProfileDTO getProfileByEmail(String email) {
        User savedUser = this.repo.findByEmail(email);
        return this.mapper.map(savedUser, ProfileDTO.class);
    }

    public User updateUserAccount(Long id, User user) {
        Optional<User> optional = this.repo.findById(id);
        User existingUser = optional.get();
        existingUser.setFirstName(user.getFirstName());
        existingUser.setLastName(user.getLastName());
        existingUser.setUserPassword(user.getUserPassword());
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
        return this.mapper.map(savedUser, ProfileDTO.class);
    }
}
