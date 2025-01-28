package Bai2t;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Scanner;
import java.io.File;
public class Main {
    public static void main(String[] args) throws FileNotFoundException {
        Scanner in = new Scanner(new File("VANBAN.in"));
        WordSet s1 = new WordSet(in.nextLine());
        WordSet s2 = new WordSet(in.nextLine());
        System.out.println(s1.union(s2));
        System.out.println(s1.intersection(s2));
    }
}
