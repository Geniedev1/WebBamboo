package bai4;

public class LUYENTAP implements Comparable<LUYENTAP> {
    private String name;
    private int ac;
    private int submit;
    public LUYENTAP(String name, int ac, int submit) {
        this.name = name;
        this.ac = ac;
        this.submit = submit;
    }
    public int compareTo(LUYENTAP other) {
        if (ac != other.ac)
            return Integer.compare(other.ac, ac);
        else if (submit != other.submit)
        {
            return Integer.compare(submit, other.submit);
        }
        return this.name.compareTo(other.name);
    }
    public String toString()
    {
        return name + " " + " " + ac + " " + submit;
    }
}
