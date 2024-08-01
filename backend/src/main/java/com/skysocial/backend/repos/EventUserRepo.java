package com.skysocial.backend.repos;

import com.skysocial.backend.entities.eventUser.EventUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface EventUserRepo extends JpaRepository<EventUser,Long> {

    int countByEventId(Long eventId);
    //List<Long> findUserById(Long id);
    int countByUserId(Long userId);
}
