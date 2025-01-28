package J06004;

public class Student {
    private String id,name,phone;
    private int stt;
    public Student(String id,String name,String phone,int stt)
    {
        String[] s = name.trim().split("\\s+");
        String ss = "";
        for(String c : s)
        {
            ss += Character.toUpperCase(c.charAt(0)) + c.substring(1).toLowerCase() + " ";
        }
        this.id = id;
        this.name = ss;
        this.phone = phone;
        this.stt = stt;
    }
    public int getStt()
    {
        return stt;
    }
    public String toString()
    {
        return id + " " + name + " " + phone;
    }
}

