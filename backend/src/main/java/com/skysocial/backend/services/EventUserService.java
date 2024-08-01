package com.skysocial.backend.services;

import com.skysocial.backend.entities.eventUser.EventUser;
import com.skysocial.backend.repos.EventUserRepo;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Data
public class EventUserService {
    private EventUserRepo eventUserRepo;

    public EventUserService(EventUserRepo eventUserRepo) {
        super();
        this.eventUserRepo = eventUserRepo;
    }

    public int getParticipantsCount(Long eventId) {
        System.out.println(this.eventUserRepo.countByEventId(eventId));
        return this.eventUserRepo.countByEventId(eventId);
    };

    public int getAllUserEvent(Long userId) {
        return this.eventUserRepo.countByUserId(userId);
    };

    public EventUser addParticipantToEvent(EventUser eventUser) {
        return this.eventUserRepo.save(eventUser);
    }
}
