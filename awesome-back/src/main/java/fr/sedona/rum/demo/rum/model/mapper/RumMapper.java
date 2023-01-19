package fr.sedona.rum.demo.rum.model.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import fr.sedona.rum.demo.core.config.CustomMapperConfig;
import fr.sedona.rum.demo.rum.model.domain.RumEntity;
import fr.sedona.rum.demo.rum.model.dto.request.RumCreateUpdateRequestDto;
import fr.sedona.rum.demo.rum.model.dto.response.RumResponseDto;

@Mapper(
        config = CustomMapperConfig.class
)
public interface RumMapper {

    RumEntity toEntity(RumCreateUpdateRequestDto createRequestDto);

    RumEntity toExistingEntity(RumCreateUpdateRequestDto updateRequestDto,
                               @MappingTarget RumEntity rumEntity);

    RumResponseDto toResponseDto(RumEntity entity);
}
