package bai11;

public class Student {
    private String id,name,clas,email,phone;
    public Student(String id, String name, String clas, String email, String phone) {
        this.id = id;
        this.name = name;
        this.clas = clas;
        this.email = email;
        this.phone = '0' +phone;
    }
    public String getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public String getphone() {
        return phone;
    }
    public String toString()
    {
        return id + " " +name;
    }
}
