/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package J7053;

/**
 *
 * @author minhh
 */
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Scanner;
import java.io.File;
import java.util.ArrayList;
import java.text.ParseException;
public class Main {
    public static void main(String[] args) throws IOException,FileNotFoundException,ParseException
    {
        Scanner in = new Scanner(new File("XETTUYEN.in"));
        ArrayList<Xettuyen> xt = new ArrayList<>();
        int t = Integer.parseInt(in.nextLine());
        for(int i = 1;i<= t ;i++)
        {
            xt.add(new Xettuyen(in.nextLine(),in.nextLine(),Double.parseDouble(in.nextLine()),Double.parseDouble(in.nextLine()),i));
        }
        for(Xettuyen x : xt )
        {
            System.out.println(x);
        }
    }
}
