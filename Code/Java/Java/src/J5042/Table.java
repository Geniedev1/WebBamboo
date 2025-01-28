package J5042;

public class Table implements Comparable<Table> {
    private String name;
    private int sub,ac;
    public Table(String name,int ac,int sub)
    {
        this.name = name;
        this.sub = sub;
        this.ac = ac;
    }
    public int compareTo(Table o)
    {
        if(ac != o.ac)
            return Integer.compare(o.ac,ac);
        else if(sub != o.sub)
            return Integer.compare(sub,o.sub);
        return name.compareTo(o.name);
    }
    public String toString()
    {
        return name + " " + ac + " " + sub;
    }
}
