package fr.sedona.rum.demo.rum.model.domain;

import fr.sedona.rum.demo.rum.model.domain.enums.RumTypeEnum;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

/**
 * Rum entity
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
@Entity(name = "Rum")
public class RumEntity {

    @Id
    @GeneratedValue
    private long id;

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
