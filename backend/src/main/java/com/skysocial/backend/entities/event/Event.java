package com.skysocial.backend.entities.event;

import com.skysocial.backend.dtos.user.ProfileDTO;
import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Event implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(max = 40)
    @NotNull
    private String eventTitle;

    @Size(max=300)
    private String eventDescription;

    @Size(max = 200)
    private String eventLocation;

    @Size(max = 200)
    private String image;

    private String startTime;

    private String endTime;

    @Min(2)
    private int minParticipants;

    @Min(2)
    private int maxParticipants;

    @Size(max=5)
    private String[] tags;

    @Min(0)
    private float ticketPrice;

    private boolean emailConfirmation;

    @NotNull
    private Long organiser;

}
