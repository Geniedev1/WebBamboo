package J7050;
import java.io.IOException;
import java.util.ArrayList;
import java.io.File;
import java.io.FileNotFoundException;
import java.text.*;
import java.util.Collections;
import java.util.Scanner;

public class Main {
    public static void main(String[]  args) throws IOException,FileNotFoundException
    {
        Scanner in = new Scanner(new File("MATHANG.in"));
        int t = Integer.parseInt(in.nextLine());
        ArrayList<Item> list = new ArrayList<>();
        for(int i = 1 ;i<= t;i++)
        {
             list.add(new Item(i,in.nextLine(),in.nextLine(),Float.parseFloat(in.nextLine()),Float.parseFloat(in.nextLine())));
        }
        Collections.sort(list);
        list.forEach(k->{
            System.out.println(k);
        });
    }
}

