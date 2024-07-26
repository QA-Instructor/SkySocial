package com.skysocial.backend.entities;


//        "id": 1,
//        "eventTitle": "Football",
//        "eventDescription": "football wednesday at sky, everyone is welcome, please signup by monday 18/12/24",
//        "eventLocation": "Goals",
//        "image": "./src/resources/e619f4e1-c156-419e-8d26-f2cc46235e76.jpg",
//        "startDateTime": "20/12/24 12:00:00",
//        "endDateTime": "20/12/24 14:00:00",
//        "minParticipants": 5,
//        "maxParticipants": 10,
//        "tags": ["footballatsky","footballforeveryone","footy"],
//        "ticketPrice": 10.00,
//        "emailConfirmation": true

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class Event {

    @Id
    @GeneratedValue
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

    //Add validation to enforce maxParticipants is at least the same size as minParticipants.
    @Min(2)
    private int maxParticipants;

    @Size(max=5)
    private String[] tags;

    @Min(0)
    private float ticketPrice;

    private boolean emailConfirmation;

}


