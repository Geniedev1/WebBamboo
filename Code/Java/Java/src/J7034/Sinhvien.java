package J7034;

public class Sinhvien implements Comparable<Sinhvien>{
    private String ma,ten;
    private Integer tinchi;
    public Sinhvien(String ma,String ten,Integer tinchi)
    {
        this.ma = ma;
        this.ten = ten;
        this.tinchi = tinchi;
    }
    public String toString() {
        return ma + " "  + ten + " " + tinchi ;
    }
    public int compareTo(Sinhvien other)
    {
        return this.ten.compareTo(other.ten);
    }
}
