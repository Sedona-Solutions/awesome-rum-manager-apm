package fr.sedona.rum.demo.database;

import java.util.HashMap;
import java.util.Map;

import org.testcontainers.containers.MariaDBContainer;

import io.quarkus.test.common.QuarkusTestResourceLifecycleManager;

public class DatabaseTestResource implements QuarkusTestResourceLifecycleManager {

    private static final MariaDBContainer<?> DATABASE = new MariaDBContainer<>("mariadb:10.5");

    @Override
    public Map<String, String> start() {
        DATABASE.start();
        Map<String, String> map = new HashMap<>();
        map.put("quarkus.datasource.reactive.url",
                String.format("mariadb://%s:%d/%s",
                        DATABASE.getHost(),
                        DATABASE.getFirstMappedPort(),
                        DATABASE.getDatabaseName()
                )
        );
        map.put("quarkus.datasource.username", DATABASE.getUsername());
        map.put("quarkus.datasource.password", DATABASE.getPassword());
        return map;
    }

    @Override
    public void stop() {
        DATABASE.stop();
    }
}
