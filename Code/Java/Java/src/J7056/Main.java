package J7056;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;
import java.io.File;
public class Main {
    public static void main(String[] args) throws IOException, FileNotFoundException
    {
        Scanner in = new Scanner(new File("KHACHHANG.in"));
        ArrayList<KhachHang> ts = new ArrayList<>();
        int t = Integer.parseInt(in.nextLine());
        for(int i =1 ;i<= t;i++)
        {
            String s1 = in.nextLine();
            String[] s2 = in.nextLine().trim().split("\\s+");
            ts.add(new KhachHang(s1,s2[0],Integer.parseInt(s2[1]),Integer.parseInt(s2[2]),i));
        }
        Collections.sort(ts);
        for(KhachHang b : ts)
        {
            System.out.println(b);
        }
    }
}
