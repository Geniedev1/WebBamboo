package J7034;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.File;
import java.util.ArrayList;
import java.util.Scanner;
import java.util.Collections;
public class Main {
    public static void main(String[] args) throws IOException, FileNotFoundException
    {
        Scanner in = new Scanner(new File("MONHOC.in"));
        int t = Integer.parseInt(in.nextLine());
        ArrayList<Sinhvien> list = new ArrayList<>();
        while(t-->0)
        {
            list.add(new Sinhvien(in.nextLine(),in.nextLine(),Integer.parseInt(in.nextLine())));
        }
        Collections.sort(list);
        for(Sinhvien sv : list) {
            System.out.println(sv);
        }
    }
}
