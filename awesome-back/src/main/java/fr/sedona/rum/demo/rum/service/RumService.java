package fr.sedona.rum.demo.rum.service;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import javax.ws.rs.NotFoundException;

import fr.sedona.rum.demo.rum.model.domain.RumEntity;
import fr.sedona.rum.demo.rum.model.dto.request.RumCreateUpdateRequestDto;
import fr.sedona.rum.demo.rum.model.dto.response.RumResponseDto;
import fr.sedona.rum.demo.rum.model.mapper.RumMapper;
import fr.sedona.rum.demo.rum.repository.RumRepository;
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

    public RumEntity findEntityById(long id) {
        return rumRepository.findByIdOptional(id)
                .orElseThrow(() -> new NotFoundException(String.format(RUM_NOT_FOUND, id)));
    }

    public RumResponseDto findById(long id) {
        return rumMapper.toResponseDto(this.findEntityById(id));
    }

    public List<RumResponseDto> findAll() {
        return rumRepository.streamAll()
                .map(rumMapper::toResponseDto)
                .toList();
    }

    @Transactional
    public RumResponseDto createRum(RumCreateUpdateRequestDto createRequestDto) {
        var rumEntity = rumMapper.toEntity(createRequestDto);
        rumRepository.persist(rumEntity);
        return rumMapper.toResponseDto(rumEntity);
    }

    @Transactional
    public RumResponseDto updateRum(long id, RumCreateUpdateRequestDto updateRequestDto) {
        var rumEntity = this.findEntityById(id);
        rumRepository.persist(rumMapper.toExistingEntity(updateRequestDto, rumEntity));
        return rumMapper.toResponseDto(rumEntity);
    }

    @Transactional
    public void deleteRum(long id) {
        var rumEntity = this.findEntityById(id);
        rumRepository.delete(rumEntity);
    }
}
