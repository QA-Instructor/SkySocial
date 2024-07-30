package com.skysocial.backend.repos;

import com.skysocial.backend.entities.event.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepo extends JpaRepository<Event,Long> {

    Event findEventById(Long id);
}
