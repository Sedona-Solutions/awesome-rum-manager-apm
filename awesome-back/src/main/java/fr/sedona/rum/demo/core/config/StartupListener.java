package fr.sedona.rum.demo.core.config;

import java.util.HashMap;
import java.util.logging.Logger;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.event.Observes;

import co.elastic.apm.attach.ElasticApmAttacher;
import io.quarkus.runtime.StartupEvent;

/**
 * Listener class for startup event
 */
@ApplicationScoped
public class StartupListener {

    private static final Logger LOGGER = Logger.getLogger("ListenerBean");

    /**
     * Programmatically initiliaze elastic java agent after startup
     * @param ev startup event
     */
    void onStart(@Observes StartupEvent ev) {
        LOGGER.info("The application is startingn initializing elastic apm agent...");

        var config = new HashMap<String, String>();
        config.put("service_name","awesome-back");
        config.put("application_packages","fr.sedona.rum,fr.sedona.rum.demo.core,fr.sedona.rum.demo.rum");
        config.put("server_url","http://fleet-server:8200");
        config.put("verify_server_cert","false");

        ElasticApmAttacher.attach(config);

        LOGGER.info("Elastic apm agent initialized");
    }

}
