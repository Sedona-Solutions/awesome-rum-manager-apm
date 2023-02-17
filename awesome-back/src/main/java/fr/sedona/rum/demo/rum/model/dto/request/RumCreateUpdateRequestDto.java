package fr.sedona.rum.demo.rum.model.dto.request;

import fr.sedona.rum.demo.rum.model.domain.RumEntity;
import fr.sedona.rum.demo.rum.model.domain.enums.RumTypeEnum;
import jakarta.validation.constraints.NotEmpty;
import lombok.Builder;
import lombok.Data;

/**
 * DTO used to create or update a {@link RumEntity}
 */
@Data
@Builder
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
