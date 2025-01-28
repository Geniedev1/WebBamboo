package J7051;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
public class Hotel implements Comparable<Hotel>
{
    private int[] price = {25,34,50,80};
    private String name;
    private String stt;
    private Date din,dout;
    private String idroom;
    private int moneyout;
    private long datein;
    public Hotel (int stt,String name,String idroom,String din,String dout,int moneyout) throws ParseException{
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");
        this.name = name;
        this.din = df.parse(din);
        this.dout= df.parse(dout);
        this.idroom = idroom;
        this.moneyout = moneyout;
        this.stt ="KH" + String.format("%02d",stt);
        this.datein =  1+(dateinn()/(1000*60*60*24));
    }
   private long dateinn () throws ParseException
   {
      return dout.getTime() - din.getTime();
   }
   private long cash()
   {
       int d = idroom.charAt(0) - '0';
       return datein*price[d-1] + moneyout;
   }
   public int compareTo(Hotel other)
   {
       return Long.compare(other.cash(),this.cash());
   }
   public String formatname()
   {
       String[] namearr = name.trim().split("\\s+");
       String s = "";
       for (String word : namearr)
       {
           s += Character.toUpperCase(word.charAt(0))+word.substring(1).toLowerCase() + " ";
       }
       return s.substring(0,s.length()-1);
   }
   public String toString()
   {
       SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");
       return stt + " " + formatname() + " " + idroom + " " + datein + " " + cash();
   }
}
