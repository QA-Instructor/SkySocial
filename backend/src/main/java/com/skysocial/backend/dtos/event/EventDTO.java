package com.skysocial.backend.dtos.event;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EventDTO {
    private Long id;

    private String eventTitle;

    private String[] tags;

    private String image;
}
