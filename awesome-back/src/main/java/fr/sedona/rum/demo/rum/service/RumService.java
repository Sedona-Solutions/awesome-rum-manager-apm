package fr.sedona.rum.demo.rum.service;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.ws.rs.NotFoundException;

import fr.sedona.rum.demo.rum.model.domain.RumEntity;
import fr.sedona.rum.demo.rum.model.dto.request.RumCreateUpdateRequestDto;
import fr.sedona.rum.demo.rum.model.dto.response.RumResponseDto;
import fr.sedona.rum.demo.rum.model.mapper.RumMapper;
import fr.sedona.rum.demo.rum.repository.RumRepository;
import io.quarkus.hibernate.reactive.panache.common.runtime.ReactiveTransactional;
import io.smallrye.mutiny.Uni;
import lombok.AllArgsConstructor;

/**
 * Service responsible for {@link RumEntity} operations
 */
@ApplicationScoped
@AllArgsConstructor
public class RumService {

    public static final String RUM_NOT_FOUND = "No rum found with id '%d'";

    private final RumRepository rumRepository;
    private final RumMapper rumMapper;

    public Uni<RumEntity> findEntityById(long id) {
        return rumRepository.findById(id).onItem()
                .ifNull()
                .failWith(new NotFoundException(String.format(RUM_NOT_FOUND, id)));
    }

    public Uni<RumResponseDto> findById(long id) {
        return this.findEntityById(id).map(rumMapper::toResponseDto);
    }

    public Uni<List<RumResponseDto>> findAll() {
        return rumRepository.findAll().stream()
                .map(rumMapper::toResponseDto)
                .collect()
                .asList();
    }

    @ReactiveTransactional
    public Uni<RumResponseDto> createRum(RumCreateUpdateRequestDto createRequestDto) {
        return rumRepository
                .persistAndFlush(rumMapper.toEntity(createRequestDto))
                .map(rumMapper::toResponseDto);
    }

    @ReactiveTransactional
    public Uni<RumResponseDto> updateRum(long id, RumCreateUpdateRequestDto updateRequestDto) {
        return this.findEntityById(id)
                .map(rumEntity -> rumMapper.toExistingEntity(updateRequestDto, rumEntity))
                .flatMap(rumRepository::persistAndFlush)
                .map(rumMapper::toResponseDto);
    }

    @ReactiveTransactional
    public Uni<Void> deleteRum(long id) {
        return this.findEntityById(id).flatMap(rumEntity -> rumRepository.delete(rumEntity).replaceWithVoid());
    }
}
