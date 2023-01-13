package fr.sedona.rum.demo.resource;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/rhum")
public class RhumResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Want some AWESOME drink ?";
    }
}