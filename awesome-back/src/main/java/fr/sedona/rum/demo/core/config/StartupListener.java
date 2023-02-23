package fr.sedona.rum.demo.core.config;

import java.util.HashMap;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import co.elastic.apm.attach.ElasticApmAttacher;
import fr.sedona.rum.demo.rum.model.domain.enums.RumTypeEnum;
import fr.sedona.rum.demo.rum.model.dto.request.RumCreateUpdateRequestDto;
import fr.sedona.rum.demo.rum.service.RumService;

/**
 * Listener class for startup event
 */
@Component
public class StartupListener {

    @Autowired
    private RumService rumService;

    private static final Logger LOGGER = Logger.getLogger(StartupListener.class.getName());

    /**
     * Programmatically initiliaze elastic java agent after startup
     */
    @EventListener(ApplicationReadyEvent.class)
    public void onStartup() {
        LOGGER.info("The application is starting initializing elastic apm agent...");

        var config = new HashMap<String, String>();
        config.put("service_name","awesome-back");
        config.put("application_packages","fr.sedona.rum");
        config.put("server_url","http://localhost:8200");
        config.put("verify_server_cert","false");
        config.put("use_path_as_transaction_name","true");
        config.put("log_sending","true");

        ElasticApmAttacher.attach(config);

        LOGGER.info("Elastic apm agent initialized");

        // Rum is added through service instead of import.sql to have it indexer with hibernate search
        var dto = RumCreateUpdateRequestDto.builder()
                .name("Clément vieux VO")
                .alcoholLevel(42.1f)
                .bottleSize(100)
                .distillery("Clément")
                .description("Bien équilibré")
                .price(29.0f)
                .stock(100)
                .type(RumTypeEnum.AGED)
                .origin("Martinique")
                .build();
        this.rumService.createRum(dto);

        LOGGER.info("One rum added");
    }

}
