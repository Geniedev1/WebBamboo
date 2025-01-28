package J5012;

public class Store implements Comparable<Store> {
    private String id,name;
    private int sll;
    private long price,VAT,sumcash;
    public Store(String id,String name,int sll,long price,long VAT)
    {
        this.sll = sll;
        this.id = id;
        this.name = name;
        this.price = price;
        this.VAT = VAT;
        this.sumcash = price*sll - VAT;
    }
    public int compareTo(Store o)
    {
        return Long.compare(o.sumcash,sumcash);
    }
    public String toString()
    {
        return id + " " + name + " " + sll + " " + price + " " + VAT + " " + sumcash;
    }
}
