import java.util.*;
import java.io.*;
public class bai2 {
    public static void main(String[] args) throws IOException,FileNotFoundException,ClassNotFoundException {
        ArrayList<Integer> data1 = readData("DATA1.in");
        ArrayList<Integer> data2 = readData("DATA2.in");
        Map<Integer,Integer> count1 = ck(data1);
        Map<Integer,Integer> count2 = ck(data2);
        TreeSet<Integer> all = new TreeSet<>(count1.keySet());
        all.addAll(count2.keySet());
        for(Integer num : all)
        {
            int countf1 = count1.get(num);
            int countf2 = count2.get(num);
            System.out.println(num + " " + countf1 + " " + countf2);
        }
    }
    private static ArrayList<Integer> readData(String f) throws IOException,FileNotFoundException,ClassNotFoundException {
        ArrayList<Integer> data = new ArrayList<>();
        try(ObjectInputStream dis = new ObjectInputStream(new FileInputStream(f))) {
            return (ArrayList<Integer>) dis.readObject();
        }
    }
    private static Map<Integer,Integer> ck(ArrayList<Integer> data)
    {
        Map<Integer,Integer> counts = new HashMap<>();
        for(Integer num :data)
        {
            if (isNonDecreasing(num))
            {
                counts.put(num, counts.getOrDefault(num, 0) + 1);
            }
        }
        return counts;
    }
    private static boolean isNonDecreasing(int num )
    {
        String str = String.valueOf(num);
        for(int i = 1; i < str.length(); i++)
        {
            if(str.charAt(i) < str.charAt(i-1))
            {
                return false;
            }

        }
        return true;
    }
}