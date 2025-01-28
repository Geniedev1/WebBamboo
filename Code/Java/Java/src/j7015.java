import java.io.FileInputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.util.ArrayList;
import java.util.TreeMap;

public class j7015
{
    public static void main(String[] args) throws IOException, FileNotFoundException,ClassNotFoundException
    {
        FileInputStream is = new FileInputStream("SONGUYEN.in");
        ObjectInputStream ios = new ObjectInputStream(is);
        ArrayList<Integer> arrio = (ArrayList<Integer>) ios.readObject();
        TreeMap<Integer,Integer> map = new TreeMap<>();
        for (Integer num : arrio)
        {
            if(map.get(num) == null)
            {
                if(Prime(num))
                    map.put(num,1);
            }
            else {
                int th = map.get(num);
                map.put(num,th+1);
            }
        }
        map.forEach((k,v)->{
            System.out.printf("%d %d\n",k,v);
        });
    }
    static  boolean Prime(int num)
   {
       if (num <= 1)
            return false;
       if(num <= 3)
           return true;
       for (int i = 2;i<= (int) Math.sqrt(num);i++)
       {
           if(num % i == 0)
               return false;
       }
       return true;
   }
}
