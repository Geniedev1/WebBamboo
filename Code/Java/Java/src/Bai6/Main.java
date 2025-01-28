package Bai6;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.*;
public class Main
{
    public static void main(String[] args) throws IOException, FileNotFoundException
    {
        Scanner sc = new Scanner(new File("DANHSACH.in"));
        HashMap<String,Integer> set = new HashMap<>();
        HashSet<String> set1 = new HashSet<>();
        while(sc.hasNextLine()) {
            String[] s = sc.nextLine().trim().split("\\s++");
            String s2 = "";
            String s3 = "";
            for (int i = 0; i < s.length; i++) {
                s3 += s[i].toLowerCase();
            }
            if (!set1.contains(s3)) {
                set1.add(s3);
                s2 += s[s.length - 1].toLowerCase();
                for (int i = 0; i < s.length - 1; i++) {
                    s2 += Character.toLowerCase(s[i].charAt(0));
                }
                if (set.get(s2) == null) {
                    set.put(s2, 2);
                } else {
                    int th = set.get(s2);
                    set.put(s2, th + 1);
                    s2 += Integer.toString(th);
                }
                System.out.println(s2 + "@ptit.edu.vn");
            }
        }
    }
}
