import java.io.ObjectInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.TreeMap;
public class J07040
{
    public static void main(String[] args) throws IOException, FileNotFoundException,ClassNotFoundException
    {
        FileInputStream io = new FileInputStream("VANBAN.in");
        ObjectInputStream ios = new ObjectInputStream(io);
        ArrayList<String> arr = (ArrayList<String>) ios.readObject();
        TreeMap<String,Integer> map = new TreeMap<>();
    }
}
