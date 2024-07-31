package com.skysocial.backend.services;

import com.skysocial.backend.dtos.event.EventDTO;
import com.skysocial.backend.entities.event.Event;
import com.skysocial.backend.enums.EventSorter;
import com.skysocial.backend.repos.EventRepo;
import lombok.Data;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@Data
public class EventService {

    private List<Event> events = new ArrayList<>();
    private EventRepo eventRepo;
    private ModelMapper mapper;

    public EventService(EventRepo eventRepo, ModelMapper mapper) {
        super();
        this.eventRepo = eventRepo;
        this.mapper = mapper;
    }

    private EventDTO mapToDTO(Event event) {
        return this.mapper.map(event, EventDTO.class);
    }

    private Event mapFromDTO(EventDTO eventDTO) {
        return this.mapper.map(eventDTO, Event.class);
    }

    public List<Event> getAllEvents() {
        return this.eventRepo.findAll();
    }

    public Event getEventById(Long id) {
        return this.eventRepo.findEventById(id);
    }

    public EventDTO createEvent(Event event) {
        Event savedEvent = this.eventRepo.save(event);
        return this.mapToDTO(savedEvent);
    }

    public Event addParticipantToEvent(Long eventId, Long participantId) {
        Event event = getEventById(eventId);
        List<Long> participants = event.getParticipantIds();
        participants.add(participantId);
        event.setParticipantIds(participants);
        return this.eventRepo.save(event);
    }

    public List<Event> sortEvents(EventSorter sorter, boolean ascending) {
        List<Event> eventToSort = getAllEvents();
        switch (sorter) {
            case ALPHABETICAL -> eventToSort.sort(Comparator.comparing(event -> event.getEventTitle()));
            case CLOSEST_START_TIME -> eventToSort.sort(Comparator.comparing(event -> event.getStartTime()));
            case NUMBER_OF_PARTICIPANTS -> eventToSort.sort(Comparator.comparing(event -> event.getParticipantIds().size()));
        }
        if (!ascending) {
            Collections.sort(eventToSort, Collections.reverseOrder());
        }
        return eventToSort;
    }

    public List<Event> getEventsCreatedBy(Long userId) {
        return getAllEvents().stream().filter(event -> event.getOrganiser().getId().equals(userId)).toList();
    }
    public List<Event> getEventsCreatedByEmail(String email) {
        return getAllEvents().stream().filter(event -> event.getOrganiser().getEmail() == (email)).toList();
    }

    public List<Event> getRegisteredEvents(Long userId) {
        return getAllEvents().stream().filter(event -> event.getParticipantIds().contains(userId)).toList();
    }

}
