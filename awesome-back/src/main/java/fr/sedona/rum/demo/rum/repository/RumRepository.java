package fr.sedona.rum.demo.rum.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import fr.sedona.rum.demo.rum.model.domain.RumEntity;

/**
 * Rum repository
 */
@Repository
public interface RumRepository extends CrudRepository<RumEntity, Long> {
}
