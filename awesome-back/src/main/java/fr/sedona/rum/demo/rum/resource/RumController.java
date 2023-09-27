package fr.sedona.rum.demo.rum.resource;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import fr.sedona.rum.demo.rum.model.dto.request.RumCreateUpdateRequestDto;
import fr.sedona.rum.demo.rum.model.dto.response.RumResponseDto;
import fr.sedona.rum.demo.rum.service.RumService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/rums")
@AllArgsConstructor
public class RumController {

    private final RumService rumService;

    @GetMapping
    public ResponseEntity<List<RumResponseDto>> findAllRums() {
        List<RumResponseDto> dtos = rumService.findAll();
        return ResponseEntity.ok(dtos);
    }

    @GetMapping("/search")
    public ResponseEntity<List<RumResponseDto>> searchRums(@RequestParam String name) {
        List<RumResponseDto> dtos = rumService.searchRum(name);
        return ResponseEntity.ok(dtos);
    }


    @GetMapping(value = "/{id}")
    public ResponseEntity<RumResponseDto> findRumById(@PathVariable("id") long id) {
        var responseDto = rumService.findById(id);
        return ResponseEntity.ok(responseDto);
    }

    @PostMapping
    public ResponseEntity<RumResponseDto> createRum(
            @RequestBody @Valid RumCreateUpdateRequestDto rumCreateDto
    ) {
        var responseDto = rumService.createRum(rumCreateDto);
        return ResponseEntity.ok(responseDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RumResponseDto> updateRum(
            @PathVariable("id") long id,
            @RequestBody @Valid RumCreateUpdateRequestDto rumUpdateDto
    ) {
        var responseDto = rumService.updateRum(id, rumUpdateDto);
        return ResponseEntity.ok(responseDto);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteRum(@PathVariable("id") long id) {
        rumService.deleteRum(id);
    }
}
