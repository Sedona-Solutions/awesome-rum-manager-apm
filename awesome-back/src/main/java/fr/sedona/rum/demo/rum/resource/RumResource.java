package fr.sedona.rum.demo.rum.resource;

import java.util.List;

import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.parameters.RequestBody;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.jboss.resteasy.reactive.RestResponse;

import fr.sedona.rum.demo.rum.model.dto.request.RumCreateUpdateRequestDto;
import fr.sedona.rum.demo.rum.model.dto.response.RumResponseDto;
import fr.sedona.rum.demo.rum.service.RumService;
import io.smallrye.mutiny.Uni;
import lombok.AllArgsConstructor;

@Path("/rums")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Tag(name = "Rums", description = "Manage rums")
@AllArgsConstructor
public class RumResource {

    private final RumService rumService;

    @GET
    @Operation(summary = "Find all rums")
    public Uni<RestResponse<List<RumResponseDto>>> findAllRums() {
        return rumService.findAll().map(RestResponse::ok);
    }

    @GET
    @Path("/{id}")
    @Operation(summary = "Find rum by id")
    public Uni<RestResponse<RumResponseDto>> findRumById(@PathParam("id") long id) {
        return rumService.findById(id).map(RestResponse::ok);
    }

    @POST
    @Operation(summary = "Create a new rum")
    public Uni<RestResponse<RumResponseDto>> createRum(
            @RequestBody(required = true) @Valid RumCreateUpdateRequestDto rumCreateDto
    ) {
        return rumService.createRum(rumCreateDto).map(RestResponse::ok);
    }

    @PUT
    @Path("/{id}")
    @Operation(summary = "Update existing rum")
    public Uni<RestResponse<RumResponseDto>> updateRum(
            @PathParam("id") long id,
            @RequestBody(required = true) @Valid RumCreateUpdateRequestDto rumUpdateDto
    ) {
        return rumService.updateRum(id, rumUpdateDto).map(RestResponse::ok);
    }

    @DELETE
    @Path("/{id}")
    @Operation(summary = "Delete rum")
    public Uni<Void> deleteRum(@PathParam("id") long id) {
        return rumService.deleteRum(id);
    }
}