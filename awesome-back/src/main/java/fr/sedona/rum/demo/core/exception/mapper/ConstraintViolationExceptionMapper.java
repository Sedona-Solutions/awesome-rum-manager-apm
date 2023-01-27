package fr.sedona.rum.demo.core.exception.mapper;


import java.util.ArrayList;
import java.util.List;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

import fr.sedona.rum.demo.core.exception.model.ApiErrorResponseDto;

/**
 * Custom constraint violation mapper to return custom formatted response
 */
@Provider
public class ConstraintViolationExceptionMapper implements ExceptionMapper<ConstraintViolationException> {

    @Override
    public Response toResponse(ConstraintViolationException exception) {
        var apiResponseError = new ApiErrorResponseDto(
            formatReason(exception)
        );

        return Response
            .status(Response.Status.BAD_REQUEST.getStatusCode())
            .entity(apiResponseError)
            .type(MediaType.APPLICATION_JSON)
            .build();
    }

    private String formatReason(ConstraintViolationException exception) {
        List<String> errors = new ArrayList<>();
        for (ConstraintViolation<?> cv : exception.getConstraintViolations()) {
            var propertyPathValue = cv.getPropertyPath().toString();
            errors.add(
                propertyPathValue.substring(propertyPathValue.lastIndexOf(".") + 1) + " : " + cv.getMessage()
            );
        }
        return String.join(", ", errors);
    }
}

