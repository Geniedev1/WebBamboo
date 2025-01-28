package J7010;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
public class Sinhvien
{
    private String ten,lop,msv;
    private float point;
    private Date ngaysinh;
    public Sinhvien(String ten,String lop,String ngaysinh,float point,String msv) throws ParseException
    {
        SimpleDateFormat sfd = new SimpleDateFormat("dd/MM/yyyy");
        this.ngaysinh = sfd.parse(ngaysinh);
        this.point = point;
        this.ten= ten;
        this.lop = lop;
        this.msv = "B20DCCN" + msv;
    }
    public String toString(){
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        String diem = String.format("%.2f",point);
        return msv + " " + ten + " " +lop+  " " + sdf.format(ngaysinh) + " " + diem;
    }
}
