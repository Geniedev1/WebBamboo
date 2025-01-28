package J7054;

import java.text.DecimalFormat;

public class Table implements Comparable<Table> {
    private String name, id;
    private int s1, s2, s3;
    private String sumpoint,status;

    public Table(String name, int s1, int s2, int s3, int i) {
        String[] s = name.trim().split("\\s+");
        String ss = "";
        for(String c : s)
        {
            ss += Character.toUpperCase(c.charAt(0)) + c.substring(1).toLowerCase() + " ";
        }
        this.name = ss.trim();
        this.s1 = s1;
        this.s2 = s2;
        this.s3 = s3;
        this.sumpoint =String.format("%.2f",(double)(s1*0.25 + s2*0.35 + s3*0.4));
        this.id = String.format("SV%02d", i);
        this.status = setStatus();
    }
    private String setStatus()
    {
        double s = Double.parseDouble(sumpoint);
        if(s < 5)
            return "KEM";
        if(s >= 5 && s < 6.5)
            return "TRUNG BINH";
        if(s >= 6.5 && s < 8)
            return "KHA";
        return "GIOI";
    }
    public int compareTo(Table o)
    {
        return o.sumpoint.compareTo(sumpoint);
    }
    public String toString()
    {
        return id + " " + name + " " + sumpoint+ " "+ status;
    }
}
