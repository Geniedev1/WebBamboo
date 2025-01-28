package bai5;

public class Subject implements Comparable<Subject>{
    private String id,namesj,exam;
    public Subject(String id, String namesj, String exam) {
        this.id = id;
        this.namesj = namesj;
        this.exam = exam;
    }
    public int compareTo(Subject other) {
        return this.id.compareTo(other.id);
    }
    public String toString()
    {
        return id + " " + namesj + " " + exam;
    }
}
