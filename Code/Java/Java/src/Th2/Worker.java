package Th2;
import java.time.Duration;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

class Worker implements Comparable<Worker> {
    private String id, name;
    private LocalTime arrival, departure;
    private long workingMinutes;
    private String status;

    public Worker(String id, String name, String arrival, String departure) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm");
        this.arrival = LocalTime.parse(arrival, formatter);
        this.departure = LocalTime.parse(departure, formatter);
        this.id = id;
        this.name = name;
        calculateWorkingMinutes();
        determineStatus();
    }

    private void calculateWorkingMinutes() {
        Duration duration = Duration.between(arrival, departure);
        this.workingMinutes = duration.toMinutes() - 60; // Subtract 60 minutes for lunch break
    }

    private void determineStatus() {
        this.status = (this.workingMinutes >= 480) ? "DU" : "THIEU"; // 8 hours * 60 minutes
    }

    public long getWorkingMinutes() {
        return workingMinutes;
    }

    public String getId() {
        return id;
    }


    public int compareTo(Worker other) {
        if (this.workingMinutes != other.workingMinutes) {
            return Long.compare(other.workingMinutes, this.workingMinutes);
        }
        return this.id.compareTo(other.id);
    }


    public String toString() {
        long hours = workingMinutes / 60;
        long minutes = workingMinutes % 60;
        return id + " " + name + " " + hours + " gio " + minutes + " phut " + status;
    }
}

