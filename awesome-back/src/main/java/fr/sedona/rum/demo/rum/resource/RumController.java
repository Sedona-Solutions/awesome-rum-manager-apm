package fr.sedona.rum.demo.rum.resource;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import fr.sedona.rum.demo.rum.model.dto.request.RumCreateUpdateRequestDto;
import fr.sedona.rum.demo.rum.model.dto.response.RumResponseDto;
import fr.sedona.rum.demo.rum.service.RumService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/rums")
@AllArgsConstructor
public class RumController {

    private final RumService rumService;

    @GetMapping
    public Mono<ResponseEntity<List<RumResponseDto>>> findAllRums() {
        List<RumResponseDto> dtos = rumService.findAll();
        return Mono.just(ResponseEntity.ok(dtos));
    }

    @GetMapping("/search")
    public Mono<ResponseEntity<List<RumResponseDto>>> searchRums(@RequestParam String name) {
        List<RumResponseDto> dtos = rumService.searchRum(name);
        return Mono.just(ResponseEntity.ok(dtos));
    }


    @GetMapping(value = "/{id}")
    public Mono<ResponseEntity<RumResponseDto>> findRumById(@PathVariable("id") long id) {
        var responseDto = rumService.findById(id);
        return Mono.just(ResponseEntity.ok(responseDto));
    }

    @PostMapping
    public Mono<ResponseEntity<RumResponseDto>> createRum(
            @RequestBody(required = true) @Valid RumCreateUpdateRequestDto rumCreateDto
    ) {
        var responseDto = rumService.createRum(rumCreateDto);
        return Mono.just(ResponseEntity.ok(responseDto));
    }

    @PutMapping("/{id}")
    public Mono<ResponseEntity<RumResponseDto>> updateRum(
            @PathVariable("id") long id,
            @RequestBody(required = true) @Valid RumCreateUpdateRequestDto rumUpdateDto
    ) {
        var responseDto = rumService.updateRum(id, rumUpdateDto);
        return Mono.just(ResponseEntity.ok(responseDto));
    }

    @DeleteMapping("/{id}")
    public Mono<Void> deleteRum(@PathVariable("id") long id) {
        rumService.deleteRum(id);
        return Mono.empty();
    }
}
