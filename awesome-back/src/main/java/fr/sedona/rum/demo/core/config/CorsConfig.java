package fr.sedona.rum.demo.core.config;

import org.springframework.context.annotation.Configuration;

/**
 * Cors configuration needed for the RUM agent to send data with correct traceparent header
 */
@Configuration
public class CorsConfig implements org.springframework.web.servlet.config.annotation.WebMvcConfigurer {

    @Override
    public void addCorsMappings(org.springframework.web.servlet.config.annotation.CorsRegistry registry) {

        registry.addMapping("/**")
                .allowedOrigins("*")
            .allowedMethods("*")
            .allowedHeaders("*")
            .exposedHeaders("*");
    }
}
