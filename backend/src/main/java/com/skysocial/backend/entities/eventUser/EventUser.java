package com.skysocial.backend.entities.eventUser;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class EventUser implements Serializable {

    @Id
    @GeneratedValue
    private int id;
    @NotNull
    private Long eventId;
    @NotNull
    private Long userId;
}
