package bai19;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;
import java.io.File;
public class Main {
    public static void main(String[] args) throws IOException, FileNotFoundException {
        Scanner in = new Scanner(new File("DANHSACH.in"));
        ArrayList<ListSub> list = new ArrayList<>();
        while (in.hasNextLine()) {
            list.add(new ListSub(in.nextLine(),in.nextLine(),in.nextLine(),in.nextLine(),in.nextLine()));
        }
        Collections.sort(list);
        for(ListSub l : list)
        {
            System.out.println(l);
        }
    }
}
