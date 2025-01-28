import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.TreeSet;

public class tH1{
    public static void main(String[] args) throws IOException, FileNotFoundException,ClassNotFoundException
    {
       // FileInputStream in = new FileInputStream("DATA1.in");
       // FileInputStream in2 = new FileInputStream("DATA2.in");
        //ObjectInputStream ios = new ObjectInputStream(in);
        //ObjectInputStream ios2 = new ObjectInputStream(in2);
        //ArrayList<Integer> ar1 = (ArrayList<Integer>) ios.readObject();
        ///ArrayList<Integer> ar2 = (ArrayList<Integer>) ios2.readObject();
        HashMap<Integer,Integer> m1 = new HashMap<>();
        HashMap<Integer,Integer> m2 = new HashMap<>();
        ArrayList<Integer> ar1 = new ArrayList<>();
        ArrayList<Integer> ar2 = new ArrayList<>();
        ar1.add(12);
        ar1.add(12);
        ar1.add(21);
        ar1.add(133);
        ar1.add(133);
        ar1.add(123);
        ar1.add(1444);
        ar2.add(12);
        ar2.add(12);
        ar2.add(21);
        ar2.add(133);
        ar2.add(133);
        ar2.add(123);
        ar2.add(1444);
        for(Integer num : ar1)
        {
            if(m1.get(num) == null)
            {
                if(check(num))
                    m1.put(num,1);
            }
            else
            {
                int th = m1.get(num);
                m1.put(num,th+1);
            }
        }
        for(Integer num : ar2)
        {
            if(m2.get(num) == null)
            {
                if(check(num))
                    m2.put(num,1);
            }
            else
            {
                int th = m2.get(num);
                m2.put(num,th+1);
            }
        }
        TreeSet<Integer> set = new TreeSet<>(m1.keySet());
        set.retainAll(m2.keySet());
        for(Integer num : set)
        {
            System.out.println(num + " " + m1.get(num) + " " + m2.get(num));
        }
    }
    static boolean check(int num)
    {
        String s = Integer.toString(num);
        if(s.length()<2)
            return false;
        for(int i =0;i<s.length()-1;i++)
        {
            if(s.charAt(i+1) - s.charAt(i) < 0)
                return false;
        }
        return true;
    }
}