package fr.sedona.rum.demo.rum.model.dto.request;

import javax.validation.constraints.NotEmpty;

import org.eclipse.microprofile.openapi.annotations.media.Schema;

import fr.sedona.rum.demo.rum.model.domain.RumEntity;
import fr.sedona.rum.demo.rum.model.domain.enums.RumTypeEnum;
import lombok.Data;

/**
 * DTO used to create or update a {@link RumEntity}
 */
@Data
@Schema
public class RumCreateUpdateRequestDto {

    @NotEmpty
    private String name;

    private String description;
    private String origin;
    private String distillery;
    private RumTypeEnum type;
    private Float alcoholLevel;
    private Float price;
    private int stock;
    private int bottleSize;
}
