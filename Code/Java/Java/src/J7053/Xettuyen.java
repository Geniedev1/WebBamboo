package J7053;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
public class Xettuyen {
    private String name,id,status;
    private double th,lt;
    private int sumpoint;
    private String date;
    public Xettuyen(String name,String date,double lt,double th,int id) throws ParseException
    {
        String[] s = name.trim().split("\\s+");
        String ss = "";
        for(String i : s)
        {
            ss += Character.toUpperCase(i.charAt(0)) + i.substring(1).toLowerCase() + " ";
        }
        this.th = th;
        this.lt = lt;
        this.name = ss.trim();
        this.date = date;
        this.id = String.format("PH%02d",id);
        setSumpoint();
        this.status = setStatus();
    }
    private String setStatus()
    {
        if(sumpoint < 5)
            return  "Truot";
        if (sumpoint < 7)
            return "Trung binh";
        if (sumpoint == 7)
            return "Kha";
        if (sumpoint == 8)
            return "Gioi";
        return "Xuat sac";
    }
    private void setSumpoint()
    {
        double sumpointf = ((th + lt )/2) + plus();
        if (sumpointf > 10.0)
            sumpointf = 10.0;
        sumpoint = (int) Math.round(sumpointf);
    }
    public double plus()
    {
        if (lt >= 8.0 && th>=8.0 )
            return 1;
        if (lt >=7.5 && th >= 7.5)
            return 0.5;
        return 0;
    }

    @Override
    public String toString()
    {
        String[] s = date.split("/");
        int year = 2021 - Integer.parseInt(s[2]);
        return id + " " + name + " " + year + " " + sumpoint + " " + status;
    }
}