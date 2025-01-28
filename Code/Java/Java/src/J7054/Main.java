package J7054;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;
import java.io.File;
public class Main {
    public static void main(String[] args) throws IOException, FileNotFoundException
    {
       Scanner in = new Scanner(new File("BANGDIEM.in"));
       ArrayList<Table> ts = new ArrayList<>();
       int t = Integer.parseInt(in.nextLine());
       for(int i =1 ;i<= t;i++)
       {
           ts.add(new Table(in.nextLine(),Integer.parseInt(in.nextLine()),Integer.parseInt(in.nextLine()),Integer.parseInt(in.nextLine()),i));
       }
       Collections.sort(ts);
       for(Table b : ts)
       {
           System.out.println(b);
       }
    }
}
