package J07057;

public class Student implements Comparable<Student>{
    private String name,dt,id,status;
    private String point;
    private int area;
    private double dc;
    public Student(String name,double point,String dt,int area,int id)
    {
        String[] s = name.trim().split("\\s+");
        String ss = "";
        for(String c : s)
        {
            ss += Character.toUpperCase(c.charAt(0)) + c.substring(1).toLowerCase() + " ";
        }
        this.id = String.format("TS%02d",id);
        this.name = ss.trim();
        this.dt = dt.trim();
        this.area = area;
        double plus = 0 ;
        if(!this.dt.equals("Kinh"))
          plus += 1.5;
        if(area == 1)
            plus += 1.5;
        if(area == 2)
            plus += 1;
        this.point = String.format("%.1f",point + plus);
         dc = Double.parseDouble(this.point);
        if(dc >= 20.5)
            this.status = "Do";
        else
            this.status = "Truot";
    }
    public int compareTo(Student o)
    {
        if (dc != o.dc)
            return Double.compare(o.dc,dc);
        return id.compareTo(o.id);
    }
  public String toString()
  {
      return id + " " + name + " " + point + " " + status;
  }
}
