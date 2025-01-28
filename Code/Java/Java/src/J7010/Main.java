package J7010;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.ParseException;
import java.util.Scanner;
import java.util.ArrayList;
public class Main {
    public static void main(String[] args) throws IOException, FileNotFoundException, ParseException {
        Scanner in = new Scanner(new File("SV.in"));
        int t = in.nextInt();
        in.nextLine();
        ArrayList<Sinhvien> arrsv = new ArrayList<>();
       for(int i = 1;i<= t;i++)
        {
            String t2 = Integer.toString(i);
            String msv = t2;
         for (int j =0;j<3-t2.length();j++)
          {
             msv = '0' + msv ;
          }
         Sinhvien sv = new Sinhvien(in.nextLine(),in.nextLine(),in.nextLine(),Float.parseFloat(in.nextLine()),msv);
         arrsv.add(sv);
        }
        for (Sinhvien sv : arrsv) {
            System.out.println(sv);
        }
    }
}
