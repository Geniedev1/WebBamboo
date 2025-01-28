import java.util.*;
import java.text.*;
import java.io.*;
public class J7004
{
    public static void main(String[] args) throws FileNotFoundException
    {
       Scanner in = new Scanner(new File("DATA.in"));
       TreeMap<Integer,Integer> Hm = new TreeMap<>();
       while(in.hasNext())
       {
           Integer n = Integer.parseInt(in.next());
            if(Hm.get(n)== null)
            {
                Hm.put(n,1);
            }
            else
            {
             int th = Hm.get(n);
             Hm.put(n,th+1);
            }
       }
       in.close();
       for (Map.Entry<Integer,Integer> a : Hm.entrySet() )
        {
            System.out.println(a.getKey()+" "+a.getValue());
        }
    }
}