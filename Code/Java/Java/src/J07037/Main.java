package J07037;
import java.util.ArrayList;
import java.util.Scanner;
import java.io.IOException;
import java.io.FileNotFoundException;
import java.io.File;
import java.util.Collections;
public class Main {
    public static void main(String[] args) throws IOException,FileNotFoundException
    {
        Scanner in = new Scanner(new File("DN.in"));
        ArrayList<Doanhnghiep> dn = new ArrayList<>();
        int t = Integer.parseInt(in.nextLine());
        while(t-->0)
            {
                dn.add(new Doanhnghiep(in.nextLine(),in.nextLine(),Integer.parseInt(in.nextLine())));
            }
        Collections.sort(dn);
        for(Doanhnghiep a : dn)
        {
            System.out.println(a);
        }
    }
}
