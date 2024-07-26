package com.skysocial.backend.dtos.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProfileDTO {

    private Long id;

    private String profileImage;

    private String email;

    private String firstName;

    private String lastName;

    private int phone;

}
