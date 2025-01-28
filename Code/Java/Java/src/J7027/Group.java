package J7027;

public class Group implements Comparable<Group> {
    private Student st;
    private Assigment hw;
    private int idg ;
    public Group(Student st, Assigment hw,int idg)
    {
        this.st = st;
        this.hw = hw;
        this.idg = idg;
    }
    public int compareTo(Group other)
    {
       if(!other.st.getid().equals(st.getid()))
       {
            return this.st.getid().compareTo(other.st.getid());
       }
       return Integer.compare(idg,other.idg);
    }
    public String toString() {
        return st + " " + idg + " " + hw ;
    }
}
