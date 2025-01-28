import java.io.*;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

class Student {
    String id;
    String name;
    String topic;
    LocalTime reportTime;

    public Student(String id, String name, String topic, String reportTime) {
        this.id = id;
        this.name = name;
        this.topic = topic;
        this.reportTime = LocalTime.parse(reportTime, DateTimeFormatter.ofPattern("HH:mm"));
    }
}

