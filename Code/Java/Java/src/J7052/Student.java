package J7052;
import java.text.DecimalFormat;
public class Student implements Comparable<Student>{
    private String id,fname;
    private double toan,ly,hoa,pluss,sumpoint;
    public Student(String id,String fname,double toan,double ly,double hoa)
    {
       String[] s = fname.trim().split("\\s+");
       String ss = "";
       for(String i :s)
       {
           ss += Character.toUpperCase(i.charAt(0)) + i.substring(1).toLowerCase()+ " ";
       }
       if(id.charAt(2) == '1')
           pluss = 0.5;
       else if(id.charAt(2) == '2')
           pluss = 1.0;
       else
          pluss = 2.5;
       sumpoint = toan*2 + ly + hoa + pluss;
       this.fname = ss.trim();
       this.id = id;
       this.toan = toan;
       this.ly = ly;
       this.hoa = hoa;
    }
    public double getSumpoint()
    {
        return sumpoint;
    }
    public int compareTo(Student o)
    {
        if (sumpoint != o.sumpoint)
            return Double.compare(o.sumpoint,sumpoint);
        return id.compareTo(o.id);
    }
    public String toString()
    {
        DecimalFormat df = new DecimalFormat();
        return id + " " + fname + " " + df.format(pluss) + " " + df.format(sumpoint)  ;
    }
}
