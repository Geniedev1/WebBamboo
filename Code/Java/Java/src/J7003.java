import java.util.*;
import java.io.*;
import java.text.*;
import java.math.*;
public class J7003
{
    public static void main(String[] args) throws FileNotFoundException,IOException,ClassNotFoundException
    {
      ObjectInputStream is = new ObjectInputStream(new FileInputStream("DATA1,in"));
      ArrayList<Integer> l = (ArrayList<Integer>) is.readObject();
      }
    }

