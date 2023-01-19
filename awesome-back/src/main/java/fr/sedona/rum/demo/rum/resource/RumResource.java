package fr.sedona.rum.demo.rum.resource;

import java.util.List;

import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.parameters.RequestBody;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;

import fr.sedona.rum.demo.rum.model.dto.request.RumCreateUpdateRequestDto;
import fr.sedona.rum.demo.rum.model.dto.response.RumResponseDto;
import fr.sedona.rum.demo.rum.model.mapper.RumMapper;
import fr.sedona.rum.demo.rum.service.RumService;
import lombok.AllArgsConstructor;

@Path("/rums")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Tag(name = "Rums", description = "Manage rums")
@AllArgsConstructor
public class RumResource {

    private final RumService rumService;
    private final RumMapper rumMapper;

    @GET
    @Operation(summary = "Find all rums")
    public List<RumResponseDto> findAllRums() {
        return rumService.findAll().stream()
                .map(rumMapper::toResponseDto)
                .toList();
    }

    @GET
    @Path("/{id}")
    @Operation(summary = "Find rum by id")
    public RumResponseDto findRumById(@PathParam("id") long id) {
        return rumMapper.toResponseDto(rumService.findById(id));
    }

    @POST
    @Operation(summary = "Create a new rum")
    public RumResponseDto createRum(@RequestBody(required = true) @Valid RumCreateUpdateRequestDto rumCreateDto) {
        return rumMapper.toResponseDto(rumService.createRum(rumCreateDto));
    }

    @PUT
    @Path("/{id}")
    @Operation(summary = "Update existing rum")
    public RumResponseDto updateRum(
            @PathParam("id") long id,
            @RequestBody(required = true) @Valid RumCreateUpdateRequestDto rumUpdateDto
    ) {
        return rumMapper.toResponseDto(rumService.updateRum(id, rumUpdateDto));
    }

    @DELETE
    @Path("/{id}")
    @Operation(summary = "Delete rum")
    public Response deleteRum(@PathParam("id") long id) {
        rumService.deleteRum(id);
        return Response.noContent().build();
    }
}