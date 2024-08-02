package com.skysocial.backend.services;

import com.skysocial.backend.entities.event.Event;
import com.skysocial.backend.entities.eventUser.EventUser;
import com.skysocial.backend.repos.EventUserRepo;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Data
public class EventUserService {
    private EventUserRepo eventUserRepo;

    private EventService eventService;

    public EventUserService(EventUserRepo eventUserRepo, EventService eventService) {
        super();
        this.eventUserRepo = eventUserRepo;
        this.eventService = eventService;
    }

    public int getParticipantsCount(Long eventId) {
        System.out.println(this.eventUserRepo.countByEventId(eventId));
        return this.eventUserRepo.countByEventId(eventId);
    };

    public int getAllUserEvent(Long userId) {
        return this.eventUserRepo.countByUserId(userId);
    };

    public List<Event> getAllBookedEvents(Long userId){
        List<EventUser> eventUsers = this.eventUserRepo.findAllByUserId(userId);
        List<Event> events = new ArrayList<>();

        for (EventUser eventUser : eventUsers){
            events.add(this.eventService.getEventById(eventUser.getEventId()));
        }

        return events;
    }

    public EventUser addParticipantToEvent(EventUser eventUser) {
        return this.eventUserRepo.save(eventUser);
    }
}
