package J7047;

public class Hotel {
     private Client cl;
     private double tong;
     public int compareTo(Hotel o)
     {
         return Long.compare(o.cl.getDatein(),cl.getDatein());
     }
     
   public String toString()
   {
       return cl + " " + String.format("%.2f",tong);
   }
}
