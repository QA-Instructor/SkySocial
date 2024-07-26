package com.skysocial.backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.Data;


@Entity
@Data
public class Users implements java.io.Serializable {
    public Users() {
    }

    public Users(String firstName, String lastName, String userName, String password, String email, int phone, String profileImage) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.profileImage = profileImage;

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Size(min = 2 , max =50)
    private String firstName;
    @Size(min = 2 , max =50)
    private String lastName;
    @Size(min = 2 , max =50)
    private String userName;
    @Size(min = 8 , max =20)
    private String password;
    @Size(min = 7 , max =50)
    private String email;
    @Size(min = 11 , max = 11)
    private int phone;
    @Size(min = 5 , max =300)
    private String profileImage;

}
