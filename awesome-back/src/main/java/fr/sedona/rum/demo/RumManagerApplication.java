package fr.sedona.rum.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Manager application
 */
@SpringBootApplication
@EnableJpaRepositories(basePackages = "fr.sedona.rum.demo.rum.repository")
public class RumManagerApplication {
    public static void main(String[] args) {
        SpringApplication.run(RumManagerApplication.class, args);
    }
}
