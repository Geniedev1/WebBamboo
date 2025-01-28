package bai4;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;
import java.io.File;
public class Main {
    public static void main(String[] args) throws IOException, FileNotFoundException {
        Scanner in = new Scanner(new File("LUYENTAP.in"));
        int t =Integer.parseInt(in.nextLine());
        ArrayList<LUYENTAP> list = new ArrayList<>();
        for(int i =0;i<t;i++)
        {
            String s = in.nextLine();
            String[] ss = in.nextLine().split(" ");
            list.add(new LUYENTAP(s,Integer.parseInt(ss[0]),Integer.parseInt(ss[1])));
        }
        Collections.sort(list);
        for (LUYENTAP l : list)
        {
            System.out.println(l);
        }

    }
}
