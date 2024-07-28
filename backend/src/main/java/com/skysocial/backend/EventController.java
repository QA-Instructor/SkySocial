package com.skysocial.backend;

import com.skysocial.backend.entities.event.Event;
import com.skysocial.backend.repos.EventRepo;
import jakarta.validation.Valid;
import jakarta.websocket.server.PathParam;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EventController {

    // private EventService service;
    private EventRepo repo;

    @GetMapping("/eventcontrollerhealth")
    public String health() {
        return "Event Controller is up and running";
    }

    @GetMapping("/getAllEvents")
    public List<Event> getAllEvents() {
        // return this.service.getAllEvents();
        return null;
    }

    @GetMapping("/")
    public Event getEventById(@PathParam("id") Long id) {
        // return this.service.getEventById(id);
        return null;
    }

    @PostMapping("/createEvent")
    public Event createNewEvent(@RequestBody @Valid Event event) {
        // return this.service.addEvent(event);
        return null;
    }

    @PutMapping("/addparticipant")
    public boolean addParticipant(@PathParam("id") Long id) {
        // return this.service.addParticipantToEvent(id);
        return false;
    }

    sortEvents
}
