package J7052;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;
import java.io.File;
public class Main {
    public static void main(String[] args) throws IOException, FileNotFoundException
    {
        Scanner in = new Scanner(new File("THISINH.in"));
        int t = Integer.parseInt(in.nextLine());
        ArrayList<Student> st = new ArrayList<>();
        while(t-->0)
        {
            st.add(new Student(in.nextLine(),in.nextLine(),Double.parseDouble(in.nextLine()),Double.parseDouble(in.nextLine()),Double.parseDouble(in.nextLine())));
        }
        Collections.sort(st);
        int chitieu = Integer.parseInt(in.nextLine());
        double diemchuan = st.get(chitieu-1).getSumpoint();
        System.out.printf("%.1f\n",diemchuan);
        for(Student i : st)
        {
            if(i.getSumpoint() >= diemchuan)
                System.out.println(i+" "+"TRUNG TUYEN");
            else
                System.out.println(i+" TRUOT");
        }
    }
}
