package com.skysocial.backend;

import com.skysocial.backend.entities.event.Event;
import com.skysocial.backend.entities.user.User;
import com.skysocial.backend.enums.EventSorter;
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

    @GetMapping("/getEventById")
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

    @GetMapping("/sortevents")
    public List<Event> sortEvents(@RequestParam(name = "sortBy", defaultValue = "ALPHABETICAL") EventSorter sorter) {
        // return this.service.sortEventsBy(sorter);
        return null;
    }

    @GetMapping("/geteventscreatedby")
    public List<Event> getEventsCreatedBy(@PathParam("id") Long id) {
        // return this.service.getEventsCreatedBy(id);
        return null;
    }

    @GetMapping("/getregisteredevents")
    public List<Event> getEventsRegisteredTo(@PathParam("id") Long userId) {
        // return this.service.getRegisteredEvents(userId);
        return null;
    }
}
