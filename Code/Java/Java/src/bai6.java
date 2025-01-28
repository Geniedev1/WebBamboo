import java.io.FileNotFoundException;
import java.io.IOException;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;
import java.io.File;
public class bai6 {
    public static void main(String[] args) throws IOException , FileNotFoundException {
        ArrayList<BigInteger> al = new ArrayList<>();
        Scanner in = new Scanner(new File("DAYSO.in"));
        int n = Integer.parseInt(in.nextLine());
        for(int i =0;i<n;i++)
        {
            BigInteger p = new BigInteger(in.nextLine().trim());
            al.add(p);
        }
        BigInteger min = Collections.min(al);
        System.out.println(min);
        BigInteger max = Collections.max(al);
        System.out.println(max);
        BigInteger sum = BigInteger.ZERO;
        for (BigInteger i : al) {
            sum = sum.add(i);
        }
        System.out.println(sum);
    }
}
