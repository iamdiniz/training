package com.diniz.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.diniz.domain.model.Entitie;

@Repository
public interface EntitieRepository extends JpaRepository<Entitie, Long>{

}
