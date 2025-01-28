package bai5;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.*;
import java.io.File;

public class Main {
    public static void main(String[] args) throws IOException , FileNotFoundException {
        Scanner in = new Scanner(new File("MONHOC.in"));
        ArrayList<Subject> list = new ArrayList<>();
        HashSet<String> s = new HashSet<>();
        while(in.hasNextLine())
        {
            String id = in.nextLine();
            String sb = in.nextLine();
            String p = in.nextLine();
            if(!s.contains(id))
            {
                list.add(new Subject(id,sb,p));
                s.add(id);
            }
        }
        Collections.sort(list);
        for(Subject sj : list)
        {
            System.out.println(sj);
        }
    }

}
