package fr.sedona.rum.demo.rum.service;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.search.engine.search.predicate.dsl.SearchPredicateFactory;
import org.hibernate.search.engine.search.query.SearchResult;
import org.hibernate.search.mapper.orm.Search;
import org.hibernate.search.mapper.orm.session.SearchSession;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.sedona.rum.demo.rum.model.domain.RumEntity;
import fr.sedona.rum.demo.rum.model.dto.request.RumCreateUpdateRequestDto;
import fr.sedona.rum.demo.rum.model.dto.response.RumResponseDto;
import fr.sedona.rum.demo.rum.model.mapper.RumMapper;
import fr.sedona.rum.demo.rum.repository.RumRepository;
import io.micrometer.common.util.StringUtils;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.AllArgsConstructor;

/**
 * Service responsible for {@link RumEntity} operations
 */
@Service
@AllArgsConstructor
public class RumService {

    public static final String RUM_NOT_FOUND = "No rum found with id '%d'";

    private final RumRepository rumRepository;
    private final RumMapper rumMapper;
    @PersistenceContext
    private EntityManager entityManager;

    public RumEntity findEntityById(long id) {
        return rumRepository.findById(id).orElseThrow(() -> new RuntimeException(String.format(RUM_NOT_FOUND, id)));
    }

    public RumResponseDto findById(long id) {
        RumEntity entity = this.findEntityById(id);
        return rumMapper.toResponseDto(entity);
    }

    public List<RumResponseDto> findAll() {
        var result = new ArrayList<RumResponseDto>();
        rumRepository.findAll()
                .forEach(entity -> result.add(rumMapper.toResponseDto(entity)));
        return result;
    }

    @Transactional
    public RumResponseDto createRum(RumCreateUpdateRequestDto createRequestDto) {
        RumEntity createdEntity = rumRepository.save(rumMapper.toEntity(createRequestDto));
        return rumMapper.toResponseDto(createdEntity);
    }

    @Transactional
    public RumResponseDto updateRum(long id, RumCreateUpdateRequestDto updateRequestDto) {
        RumEntity entityToUpdate = this.findEntityById(id);
        RumEntity updatedEntity = rumMapper.toExistingEntity(updateRequestDto, entityToUpdate);
        return rumMapper.toResponseDto(rumRepository.save(updatedEntity));
    }

    @Transactional
    public void deleteRum(long id) {
        RumEntity entityToDelete = this.findEntityById(id);
        rumRepository.delete(entityToDelete);
    }

    @Transactional
    public List<RumResponseDto> searchRum(String name){
        SearchSession searchSession = Search.session(entityManager);

        if(StringUtils.isBlank(name)){
            return searchSession.search(RumEntity.class)
                    .where(SearchPredicateFactory::matchAll)
                    .fetchAllHits().stream()
                        .map(rumMapper::toResponseDto)
                        .toList();
        }

        SearchResult<RumEntity> results = searchSession.search(RumEntity.class).where(f -> f.match()
                .fields("name")
                .matching(name)).fetchAll();
        return results.hits().stream()
                .map(rumMapper::toResponseDto)
                .toList();
    }
}
