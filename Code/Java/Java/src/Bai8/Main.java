package Bai8;
import java.io.*;
import java.util.*;
public class Main
{
    public static void main(String[] args) throws IOException,FileNotFoundException {
        Scanner in = new Scanner(new File("DANHSACH.in"));
        List<Sinhvien> list = new ArrayList<>();
        while(in.hasNextLine())
        {
            list.add( new Sinhvien(in.nextLine(),in.nextLine(),in.nextLine(),in.nextLine(),in.nextLine()));
        }
        Collections.sort(list);
        for(Sinhvien s : list)
        {
            System.out.println(s);
        }
    }
}
