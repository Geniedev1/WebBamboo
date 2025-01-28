package Bai3;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n =Integer.parseInt(in.nextLine());
        ArrayList<Pair<Integer,Integer>> list = new ArrayList<>();
        for (int i =1 ;i<= n;i++)
        {
            String[] xau = in.nextLine().split(" ");
            for(int j=1;j<=n;j++)
            {
                if(xau[j-1].equals("1")&&i<j)
                {
                    list.add(new Pair<>(i,j));
                }
            }
        }
        for(Pair<Integer,Integer> pair:list)
        {
            System.out.println(pair);
        }
    }
}
