package Bai9;

public class Sinhvien implements Comparable<Sinhvien> {
    private String ten;
    private Integer dung, submit;

    public Sinhvien(String ten, int dung, int submit) {
        this.ten = ten;
        this.dung = dung;
        this.submit = submit;
    }

    public String toString() {
        return ten + " " + dung + " " + submit;
    }

    public int compareTo(Sinhvien other) {
        int dungCompare = this.dung.compareTo(other.dung);
        if (dungCompare != 0) {
            return dungCompare;
        }
        int submitCompare = this.submit.compareTo(other.submit);
        if (submitCompare != 0)
            return submitCompare;
       return this.ten.compareTo(other.ten);
    }
}

