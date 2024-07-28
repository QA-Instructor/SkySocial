package com.skysocial.backend.repos;

import com.skysocial.backend.entities.event.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepo extends JpaRepository<Event,Long> {
}
