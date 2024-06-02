package com.diniz.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diniz.domain.model.Entitie;
import com.diniz.domain.repository.EntitieRepository;

@RestController
@RequestMapping(value = "/entities")
public class EntitieController {

    @Autowired
    private EntitieRepository entitieRepository;

    @GetMapping
    public List<Entitie> findAll() {
        return entitieRepository.findAll();
    } 

}
