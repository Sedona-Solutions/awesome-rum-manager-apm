package fr.sedona.rum.demo.rum.repository;

import javax.enterprise.context.ApplicationScoped;

import fr.sedona.rum.demo.rum.model.domain.RumEntity;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

/**
 * Rhum repository
 */
@ApplicationScoped
public class RumRepository implements PanacheRepository<RumEntity> {
}
