package J7051;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException, FileNotFoundException, ParseException
    {
        Scanner in =new Scanner(new File("KHACHHANG.in"));
        int t = Integer.parseInt(in.nextLine());
        ArrayList<Hotel> list = new ArrayList<>();
        for(int i =1 ;i<= t;i++)
        {
            list.add(new Hotel(i,in.nextLine(),in.nextLine(),in.nextLine(),in.nextLine(),Integer.parseInt(in.nextLine())));
        }
        Collections.sort(list);
        for (Hotel h : list)
        {
            System.out.println(h);
        }
    }
}
