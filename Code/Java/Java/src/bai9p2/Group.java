package bai9p2;

public class Group implements Comparable<Group>{
    private String name,id,iname;
    public Group(String name, String iname) {
        this.name = name;
        this.id = id;
        this.iname = iname;
    }
    public void setId(String id)
    {
        this.id = id;
    }
    public int compareTo(Group other) {
        if(!iname.equals(other.iname))
        {
            return iname.compareTo(other.iname);
        }
        return name.compareTo(other.name);
    }
    public String toString()
    {
        return id + " " + name + " " + iname;
    }
}
