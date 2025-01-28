package Th3;

public class DanhSach implements Comparable<DanhSach>{
    private String id,name,lop,email,num;
    public DanhSach(String id,String name,String lop,String email,String num)
    {
        this.lop = lop;
        this.id = id;
        this.name = name;
        this.email = email;
        this.num = '0' + num;
    }
    public int compareTo(DanhSach o)
    {
        if(!lop.equals(o.lop))
        {
            return lop.compareTo(o.lop);
        }
        return id.compareTo(o.id);
    }
    public String toString()
    {
        return id + " " + name + " " + lop +" "+ email + " " + num ;
    }
}
