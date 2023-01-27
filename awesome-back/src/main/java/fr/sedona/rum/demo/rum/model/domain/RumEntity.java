package fr.sedona.rum.demo.rum.model.domain;

import javax.persistence.Entity;

import fr.sedona.rum.demo.rum.model.domain.enums.RumTypeEnum;
import io.quarkus.hibernate.reactive.panache.PanacheEntity;
import lombok.*;

/**
 * Rum entity
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
@Entity(name = "Rum")
public class RumEntity extends PanacheEntity {

    private String name;
    private String description;
    private String origin;
    private String distillery;
    private RumTypeEnum type;
    private float alcoholLevel;
    private float price;
    private int stock;
    private int bottleSize;
}
