package net.sahet.javatesting;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
/**
 * Note: If we don't use @Configuration in the POJO, then we need to add @EnableConfigurationProperties(ConfigProperties.class) in the main
 */
//@EnableConfigurationProperties(ConfigProperties.class)
@Slf4j
public class Application {

    public static void main(String[] args) {

    	SpringApplication.run(Application.class, args);
        //log.info("Application Started...");
    }

}
