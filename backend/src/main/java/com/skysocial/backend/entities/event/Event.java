package com.skysocial.backend.entities.event;

import com.skysocial.backend.dtos.user.ProfileDTO;
import com.skysocial.backend.entities.user.User;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

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

    @Size(max = 20)
    private String startTime;

    @Size(max = 20)
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
    private ProfileDTO organiser;
    
    private Long[] participantIds;

}


