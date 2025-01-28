package J7050;

public class Item implements Comparable<Item> {
    private String iditem,nameitem,group;
    private float pricein,priceout,profit;
    public Item(int i,String nameitem,String group,float pricein,float priceout)
    {
        this.group = group;
        this.iditem =  "MH" + String.format("%02d",i);;
        this.nameitem = nameitem;
        this.pricein = pricein;
        this.priceout = priceout;
        this.profit = priceout - pricein;
    }
    public int compareTo(Item other)
    {
        return Float.compare(other.profit,this.profit);
    }
    public String toString()
    {
        return iditem + " " + nameitem + " " + group + " " + String.format("%.2f",profit);
    }
}
