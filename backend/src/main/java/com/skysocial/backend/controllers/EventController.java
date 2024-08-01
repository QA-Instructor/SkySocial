package com.skysocial.backend.controllers;

import com.skysocial.backend.dtos.event.EventDTO;
import com.skysocial.backend.entities.event.Event;
import com.skysocial.backend.enums.EventSorter;
import com.skysocial.backend.services.EventService;
import jakarta.validation.Valid;
import jakarta.websocket.server.PathParam;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@NoArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EventController {

    private EventService service;

    @Autowired
    public EventController(EventService service) {
        super();
        this.service = service;
    }

    @GetMapping("/getAllEvents")
    public List<Event> getAllEvents() {
         return this.service.getAllEvents();
    }

    @GetMapping("/getEventById")
    public Event getEventById(@PathParam("id") Long id) {
         return this.service.getEventById(id);
    }

    @PostMapping("/createEvent")
    public EventDTO createNewEvent(@RequestBody @Valid Event event) {
        return this.service.createEvent(event);
    }

    @PutMapping("/addParticipant")
    public Event addParticipant(@PathParam("eventId") Long eventId, @PathParam("participantId") Long participantId) {
        return this.service.addParticipantToEvent(eventId, participantId);
    }

    @GetMapping("/sortEvents")
    public List<Event> sortEvents(@RequestParam(name = "sortBy", defaultValue = "ALPHABETICAL") EventSorter sorter, @RequestParam(name = "ascending", defaultValue = "false") boolean ascending) {
         return this.service.sortEvents(sorter, ascending);
    }

    @GetMapping("/getEventsCreatedBy")
    public List<Event> getEventsCreatedBy(@PathParam("id") Long creatorId) {
        return this.service.getEventsCreatedBy(creatorId);
    }

    @GetMapping("/getEventsCreatedByEmail")
    public List<Event> getEventsCreatedByEmail(@PathParam("email") String email) {
        return this.service.getEventsCreatedByEmail(email);
    }

    @GetMapping("/getRegisteredEvents")
    public List<Event> getEventsRegisteredTo(@PathParam("userId") Long userId) {
         return this.service.getRegisteredEvents(userId);
    }
}
