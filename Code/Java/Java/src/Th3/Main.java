package Th3;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;
import java.io.File;
public class Main {
    public static void main(String[] args) throws IOException, FileNotFoundException
    {
        Scanner in = new Scanner(new File("DANHSACH.in"));
        ArrayList<DanhSach> ds = new ArrayList<>();
        while(in.hasNextLine())
        {
            ds.add(new DanhSach(in.nextLine(),in.nextLine(),in.nextLine(),in.nextLine(),in.nextLine()));
        }
        Collections.sort(ds);
        for(DanhSach d : ds)
        {
            System.out.println(d);
        }
    }
}
