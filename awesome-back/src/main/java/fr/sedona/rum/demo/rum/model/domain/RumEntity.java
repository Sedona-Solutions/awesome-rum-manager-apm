package fr.sedona.rum.demo.rum.model.domain;

import org.hibernate.search.mapper.pojo.mapping.definition.annotation.FullTextField;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.GenericField;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.Indexed;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.KeywordField;

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
@Indexed
public class RumEntity {

    @Id
    @GeneratedValue
    private long id;

    @FullTextField
    private String name;
    @FullTextField
    private String description;
    @FullTextField
    private String origin;
    @FullTextField
    private String distillery;
    @KeywordField
    private RumTypeEnum type;
    @GenericField
    private float alcoholLevel;
    @GenericField
    private float price;
    @GenericField
    private int stock;
    @GenericField
    private int bottleSize;
}
