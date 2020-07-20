package net.sahet.javatesting;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Calendar;
import java.util.Date;

public class AbstractTest {

    public static final String VATINFO_URI = "http://localhost:9091/vatRates";

    protected long startTime;

    protected void writeResponseToFile(String responseString, String fileName) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(fileName))) {
            writer.write(responseString);
        } catch (IOException e) {
            System.err.println(e.getMessage());
        }
    }

    @BeforeAll
    public void beforeTest() {
        startTime = Calendar.getInstance().getTimeInMillis();
        System.out.println("start time " + new Date(startTime));
    }

    @AfterAll
    public void afterTest() {
        long endTime = Calendar.getInstance().getTimeInMillis();
        System.out.println("stop time " + new Date(endTime));
        long totalTime = (endTime - startTime) / (1000);// sec
        System.out.println("total RUN Time in seconds: " + totalTime);
        System.out.println();
    }
}
