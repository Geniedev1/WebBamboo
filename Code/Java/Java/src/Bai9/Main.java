package Bai9;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException, FileNotFoundException {
        Scanner sc = new Scanner(System.in);
        List<Sinhvien> list = new ArrayList<Sinhvien>();
        int n = sc.nextInt();
       for (int i = 0; i < n; i++) {
            for(int j =0;j<2;j++)
            {

            }
       }
        Collections.sort(list);
        for(Sinhvien sinhvien : list) {
            System.out.println(sinhvien);
        }
    }
}
