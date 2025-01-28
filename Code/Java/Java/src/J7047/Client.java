package J7047;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Client {
    private String id,name,idroom;
    private Date checkin,checkout;
    private long datein;
    public Client(String name,String idroom,String checkin,String checkout,int id) throws ParseException
    {
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");
        String[] s = name.trim().split("\\s+");
        String ss = "";
        for(String c : s)
        {
            ss += Character.toUpperCase(c.charAt(0)) + c.substring(1).toLowerCase() + " ";
        }
        this.name = ss.trim();
        this.idroom = idroom;
        this.checkin = df.parse(checkin);
        this.checkout = df.parse(checkout);
        this.datein = setDatein()/(60*60*1000*24);
    }
    private long setDatein()
    {
        return checkout.getTime() - checkin.getTime();
    }
    public long getDatein()
    {
        return datein;
    }
    public String getIdroom()
    {
        return idroom.charAt(2) + "";
    }
    public String toString()
    {
        return id + " " + name + " " + idroom  + " " + datein ;
    }
}
