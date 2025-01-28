package J7047;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.Scanner;

public class Main {
            public static void main(String[] args) throws IOException, FileNotFoundException, ParseException
            {
                Scanner in = new Scanner(new File("src/DATA.in"));
                int t = Integer.parseInt(in.nextLine());
                String[] ht = new String[t];
                for(int i =0;i<t;i++)
                {
                    ht[i] = in.nextLine();
                }
                int t2 = Integer.parseInt(in.nextLine());
                ArrayList<Client> cl = new ArrayList<>();
                for(int i = 1;i<= t2;i++)
                {
                    cl.add(new Client(in.nextLine(),in.nextLine(),in.nextLine(),in.nextLine(),i));
                }
            }
}
