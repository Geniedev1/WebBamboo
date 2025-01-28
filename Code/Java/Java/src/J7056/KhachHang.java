package J7056;


public class KhachHang implements Comparable<KhachHang> {
    private String name,id;
    private int[] arr = {100,500,200};
    private int in,out,vat,sum;
    public KhachHang(String name,String type,int f,int l,int i)
    {
        String[] s = name.trim().split("\\s+");
        String ss = "";
        for(String c : s)
        {
            ss += Character.toUpperCase(c.charAt(0)) + c.substring(1).toLowerCase() + " ";
        }
        this.id = String.format("KH%02d",i);
        this.name = ss.trim();
        int index = type.charAt(0) - 'A';
        if((l-f)<=arr[index])
        {
            this.in = (l-f)*450;
            this.out = 0;
        }
        else
        {
            this.in = arr[index]*450;
            this.out = (l-f-arr[index])*1000;
        }
        this.vat = out/20;
        this.sum = in + out + vat;
    }
    public int compareTo(KhachHang o)
    {
        return Integer.compare(o.sum,sum);
    }
    public String toString()
    {
        return id + " " + name + " " + in + " " + out + " " + vat + " " + sum;
    }
}
