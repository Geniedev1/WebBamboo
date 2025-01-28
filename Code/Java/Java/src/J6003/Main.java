package J6003;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args)
    {
        Scanner in = new Scanner(System.in);
        String[] s = in.nextLine().trim().split("\\s+");
        int n = Integer.parseInt(s[0]);
        int m = Integer.parseInt(s[1]);
        ArrayList<ArrayList<Student>> ar = new ArrayList<>();
        for(int i =0 ;i< m;i++)
        {
            ArrayList<Student> newlist = new ArrayList<>();
            ar.add(newlist);
        }
        for(int i =0;i<n;i++)
        {
         Student st = new Student(in.nextLine(),in.nextLine(),in.nextLine(),Integer.parseInt(in.nextLine()));
         ar.get(st.getStt()-1).add(st);
        }
        String[] topic = new String[m];
        for(int i =0;i<m;i++)
        {
            topic[i] = in.nextLine();
        }
        int t = Integer.parseInt(in.nextLine());
        for(int i =1;i<=t;i++)
        {
            int stt = Integer.parseInt(in.nextLine());
            System.out.printf("DANH SACH NHOM %d:\n",stt);
            for(Student ss : ar.get(stt-1))
            {
                System.out.println(ss);
            }
            System.out.printf("Bai tap dang ky: %s\n",topic[stt-1]);
        }
    }
}
