import java.io.*;
import java.util.*;

public class Bai1 {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        List<Integer> data1 = readData("DATA1.in");
        List<Integer> data2 = readData("DATA2.in");

        Map<Integer, Integer> count1 = countOccurrences(data1);
        Map<Integer, Integer> count2 = countOccurrences(data2);

        TreeSet<Integer> primesInBoth = new TreeSet<>(count1.keySet());
        primesInBoth.retainAll(count2.keySet());

        for (int prime : primesInBoth) {
            System.out.println(prime + " " + count1.get(prime) + " " + count2.get(prime));
        }
    }

    private static List<Integer> readData(String filename) throws IOException, ClassNotFoundException {
        List<Integer> data;
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(filename))) {
            data = (List<Integer>) ois.readObject();
        }
        return data;
    }

    private static Map<Integer, Integer> countOccurrences(List<Integer> data) {
        Map<Integer, Integer> counts = new HashMap<>();
        for (int num : data) {
            if (isPrime(num)) {
                counts.put(num, counts.getOrDefault(num, 0) + 1);
            }
        }
        return counts;
    }

    private static boolean isPrime(int num) {
        if (num < 2) return false;
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) return false;
        }
        return true;
    }
}