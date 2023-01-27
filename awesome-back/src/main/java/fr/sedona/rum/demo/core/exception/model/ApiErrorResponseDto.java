package fr.sedona.rum.demo.core.exception.model;

import lombok.Data;

@Data
public class ApiErrorResponseDto {

    private String error;

    public ApiErrorResponseDto(String error) {
        this.error = error;
    }
}
