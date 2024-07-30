package com.skysocial.backend.entities.user;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Users")
public class User implements java.io.Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(min = 2 , max = 50)
    private String firstName;
    @Size(min = 2 , max = 50)
    private String lastName;
    @Size(min = 8 , max = 20)
    private String password;
    @Size(min = 7 , max = 50)
    private String email;
    @Size(min = 11 , max = 11)
    private String phone;
    @Size(min = 5 , max = 300)
    private String profileImage;

}
