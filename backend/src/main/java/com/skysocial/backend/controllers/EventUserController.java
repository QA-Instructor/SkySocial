package com.skysocial.backend.controllers;

import com.skysocial.backend.entities.event.Event;
import com.skysocial.backend.entities.eventUser.EventUser;
import com.skysocial.backend.services.EventUserService;
import jakarta.validation.Valid;
import jakarta.websocket.server.PathParam;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@NoArgsConstructor
@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://13.41.210.250:3000"})
public class EventUserController {

    private EventUserService service;

    @Autowired
    public EventUserController(EventUserService service) {
        super();
        this.service = service;
    }

    @PostMapping("/addParticipant")
    public EventUser addParticipant(@RequestBody @Valid EventUser eventUser) {
        return this.service.addParticipantToEvent(eventUser);
    }

    @GetMapping("/getBookedEvents")
    public int getEventsRegisteredTo(@PathParam("userId") Long userId) {
        return this.service.getAllUserEvent(userId);
    }

    @GetMapping("/getUserBookedEvents")
    public List<Event> getBookedEvents(@PathParam("userId") Long userId) {
        return this.service.getAllBookedEvents(userId);
    }

    @GetMapping("/getParticipantCount")
    public int getParticipantCount(@PathParam("eventId") Long eventId) {
        return this.service.getParticipantsCount(eventId);
    }
}
