package fr.sedona.rum.demo.core.exception.mapper;

import javax.ws.rs.NotFoundException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

import fr.sedona.rum.demo.core.exception.model.ApiErrorResponseDto;

@Provider
public class NotFoundExceptionMapper implements ExceptionMapper<NotFoundException> {

    @Override
    public Response toResponse(NotFoundException e) {
        var apiResponseError = new ApiErrorResponseDto(e.getMessage());

        return Response
                .status(Response.Status.NOT_FOUND.getStatusCode())
                .entity(apiResponseError)
                .type(MediaType.APPLICATION_JSON)
                .build();
    }
}
