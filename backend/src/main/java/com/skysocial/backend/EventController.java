package com.skysocial.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EventController {

    // private EventService service;

    @GetMapping("/eventcontrollerhealth")
    public String health() {
        return "Event Controller is up and running";
    }

    
}
