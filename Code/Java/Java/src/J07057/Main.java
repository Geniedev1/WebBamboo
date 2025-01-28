package J07057;

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
        ArrayList<Student>  st = new ArrayList<>();
        for(int i = 1;i<= t;i++)
        {
            st.add(new Student(in.nextLine(),Double.parseDouble(in.nextLine()),in.nextLine(),Integer.parseInt(in.nextLine()),i));
        }
        Collections.sort(st);
        for( Student s :st)
        {
            System.out.println(s);
        }
    }
}
