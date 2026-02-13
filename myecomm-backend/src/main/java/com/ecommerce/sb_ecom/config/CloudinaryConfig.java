package com.ecommerce.sb_ecom.config;

import com.cloudinary.Cloudinary;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Map;

@Configuration
public class CloudinaryConfig {

    @Value("${cloudinary.cloud-name}")
    private String cloudName;

    @Value("${cloudinary.api-key}")
    private String apiKey;

    @Value("${cloudinary.api-secret}")
    private String apiSecret;

    @Bean
    public Cloudinary cloudinary() {
        System.out.println("Cloudinary config - cloud_name: " + cloudName);
        System.out.println("Cloudinary config - api_key: " + (apiKey != null && apiKey.length() > 4 ? apiKey.substring(0, 4) + "****" : "EMPTY"));
        System.out.println("Cloudinary config - api_secret: " + (apiSecret != null && !apiSecret.isEmpty() ? "****SET****" : "EMPTY"));
        return new Cloudinary(Map.of(
                "cloud_name", cloudName,
                "api_key", apiKey,
                "api_secret", apiSecret
        ));
    }
}
