package J7027;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;
import java.io.File;
public class Main
{
    public static void main(String[] args) throws IOException, FileNotFoundException{
        Scanner in = new Scanner(new File("SINHVIEN.in"));
        Scanner in2 = new Scanner(new File("BAITAP.in"));
        Scanner in3 = new Scanner(new File("NHOM.in"));
        ArrayList<Student> s = new ArrayList<>();
        ArrayList<Assigment> a = new ArrayList<>();
        ArrayList<Group> Gr = new ArrayList<>();
        int t = Integer.parseInt(in.nextLine());
        int t2 = Integer.parseInt(in2.nextLine());
        for (int i = 1 ;i<= t; i++)
        {
            s.add(new Student(in.nextLine(),in.nextLine(),in.nextLine()));
        }
        for(int i = 1 ;i<= t2;i++)
        {
            a.add(new Assigment(in2.nextLine()));
        }
        for(int i = 1;i<= t;i++)
        {
            String[] ss = in3.nextLine().trim().split("\\s+");
            int x = Integer.parseInt(ss[1]);
            for(Student sv : s)
            {
                if(sv.getid().equals(ss[0]))
                {
                    Gr.add(new Group(sv,a.get(x-1),x));
                }
            }
        }
        Collections.sort(Gr);
        for (Group g : Gr)
        {
            System.out.println(g);
        }
    }
}
