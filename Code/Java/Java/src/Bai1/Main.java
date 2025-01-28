package Bai1;
import java.util.*;
import java.text.*;
import java.math.*;
public class Main {
    public static void main(String[] args)
    {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
       TreeSet<Double> set = new TreeSet<>();
       for(int i = 0; i < n; i++)
       {
           double x = in.nextDouble();
           set.add(x);
       }
       double sum =0;
      ArrayList<Double> arr = new ArrayList<>(set);
      for (int i =1;i<arr.size()-1;i++)
      {
          sum += arr.get(i);
      }
      System.out.printf("%.2f",Math.abs(sum/(set.size()-2)));
    }
}
