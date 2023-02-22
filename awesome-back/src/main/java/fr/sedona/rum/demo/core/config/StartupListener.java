package fr.sedona.rum.demo.core.config;

import java.util.HashMap;
import java.util.logging.Logger;

import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import co.elastic.apm.attach.ElasticApmAttacher;

/**
 * Listener class for startup event
 */
@Component
public class StartupListener {

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

        ElasticApmAttacher.attach(config);

        LOGGER.info("Elastic apm agent initialized");
    }

}
