package fr.sedona.rum.demo.rum.resource;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

import fr.sedona.rum.demo.database.DatabaseTestResource;
import fr.sedona.rum.demo.rum.model.domain.enums.RumTypeEnum;
import fr.sedona.rum.demo.rum.model.dto.request.RumCreateUpdateRequestDto;
import io.quarkus.test.common.QuarkusTestResource;
import io.quarkus.test.common.http.TestHTTPEndpoint;
import io.quarkus.test.junit.QuarkusTest;

@QuarkusTest
@QuarkusTestResource(DatabaseTestResource.class)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@TestHTTPEndpoint(RumResource.class)
class RumResourceIntegrationTest {

    private final RumCreateUpdateRequestDto rumCreateUpdateRequestDto = RumCreateUpdateRequestDto.builder()
            .name("Cœur de Canne")
            .description("Rhum blanc de Martinique")
            .origin("Martinique")
            .distillery("La Favorite")
            .type(RumTypeEnum.WHITE)
            .alcoholLevel(50f)
            .price(33.5f)
            .stock(450)
            .bottleSize(70)
            .build();

    @Test
    @Order(1)
    void createRum_should_create_new_rum() {
        // given/when/then
        given()
                .contentType(MediaType.APPLICATION_JSON)
                .body(rumCreateUpdateRequestDto)
                .post()
                .then()
                .assertThat()
                .statusCode(Response.Status.OK.getStatusCode())
                .body("id", notNullValue());
    }

    @Test
    @Order(2)
    void updateRum_should_update_existing_rum() {
        // given/when/then
        var rumId = 1;
        var stock = 100;
        rumCreateUpdateRequestDto.setStock(100);

        given()
                .contentType(MediaType.APPLICATION_JSON)
                .body(rumCreateUpdateRequestDto)
                .pathParam("id", rumId)
                .put("/{id}")
                .then()
                .assertThat()
                .statusCode(Response.Status.OK.getStatusCode())
                .body("id", equalTo(rumId))
                .body("stock", equalTo(stock));
    }

    @Test
    @Order(3)
    void findRumById_should_return_rum_whith_given_id() {
        // given/when/then
        given()
                .contentType(MediaType.APPLICATION_JSON)
                .pathParam("id", 1)
                .get("/{id}")
                .then()
                .assertThat()
                .statusCode(Response.Status.OK.getStatusCode());
    }

    @Test
    @Order(4)
    void findAllRums_should_return_list_of_all_rums() {
        // given/when/then
        given()
                .contentType(MediaType.APPLICATION_JSON)
                .get()
                .then()
                .assertThat()
                .statusCode(Response.Status.OK.getStatusCode())
                .body("list.size()", is(1));
    }

    @Test
    @Order(5)
    void deleteRum_should_delete_rum_with_given_id() {
        // given/when/then
        var rumId = 1;

        given()
                .contentType(MediaType.APPLICATION_JSON)
                .pathParam("id", rumId)
                .delete("/{id}")
                .then()
                .assertThat()
                .statusCode(Response.Status.NO_CONTENT.getStatusCode());
    }

    @Test
    @Order(6)
    void findRumById_should_return_not_found_status_if_rum_with_given_id_not_exists() {
        // given/when/then
        given()
                .contentType(MediaType.APPLICATION_JSON)
                .pathParam("id", 1)
                .get("/{id}")
                .then()
                .assertThat()
                .statusCode(Response.Status.NOT_FOUND.getStatusCode());
    }
}