package J5042;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException, FileNotFoundException
    {
        Scanner in = new Scanner(System.in);
        int t = Integer.parseInt(in.nextLine());
        ArrayList<Table> ts = new ArrayList<>();
        while(t-->0)
        {
            String s1 = in.nextLine();
            String[] s2 = in.nextLine().trim().split("\\s+");
            ts.add(new Table(s1,Integer.parseInt(s2[0]),Integer.parseInt(s2[1])));
        }
        Collections.sort(ts);
        for(Table t1 :ts)
        {
            System.out.println(t1);
        }
    }
}
