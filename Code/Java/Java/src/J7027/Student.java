package J7027;

public class Student {
    private String id ,name,phone;
    public Student(String id,String name,String phone)
    {
        this.id =  id;
        this.phone = phone;
        this.name = name;
    }
    public String getid()
    {
        return id;
    }
    public String toString()
    {
        return id + " " + name + " " + phone ;
    }
}
