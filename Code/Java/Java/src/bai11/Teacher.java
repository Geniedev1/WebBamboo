package bai11;

public class Teacher implements Comparable<Teacher>{
    private Student student;
    private String nameT;
    private String nameS;
    public Teacher(String nameT,Student student,String nameS) {
        this.nameT = nameT;
        this.nameS = nameS;
        this.student = student;
    }
    public int compareTo(Teacher other) {
        return this.student.getId().compareTo(other.student.getId());
    }
    public String toString()
    {
        return student + " " + nameT + " " + nameS+ " "+ student.getphone();
    }
}
