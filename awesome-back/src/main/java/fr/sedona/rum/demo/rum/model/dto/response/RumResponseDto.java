package fr.sedona.rum.demo.rum.model.dto.response;

import org.eclipse.microprofile.openapi.annotations.media.Schema;

import fr.sedona.rum.demo.rum.model.domain.RumEntity;
import fr.sedona.rum.demo.rum.model.domain.enums.RumTypeEnum;
import lombok.Builder;
import lombok.Data;

/**
 * Response DTO for {@link RumEntity}
 */
@Data
@Builder
@Schema
public class RumResponseDto {
    private long id;
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
