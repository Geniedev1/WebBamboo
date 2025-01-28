package bai19;

public class ListSub implements Comparable<ListSub> {
    private String id,name,clas,email,phone;
    public ListSub(String id, String name, String clas, String email, String phone) {
        this.id = id;
        this.name = name;
        this.clas = clas;
        this.email = email;
        this.phone ='0'+ phone;
    }
    public int compareTo(ListSub other) {
        if (!clas.equals(other.clas))
        {
            return clas.compareTo(other.clas);
        }
        return id.compareTo(other.id);
    }
    public String toString()
    {
        return id + " " + name + " " + clas + " " + email + " " + phone ;
    }
}
