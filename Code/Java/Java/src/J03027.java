import java.util.Scanner;

public class J03027 {
    public static void main(String[] args)
    {
        Scanner in = new Scanner(System.in);
        String s = in.nextLine();
        int cnt = 0;
        while(true)
        {
            for(int i =0;i<s.length()-1;i++)
            {
                if (s.charAt(i) == s.charAt(i+1))
                {
                    cnt++;
                    s = s.substring(0,i) + s.substring(i+2);
                    break;
                }
            }
            if (cnt==0)
                break;
            cnt =0 ;
        }
        if (s.isEmpty())
        {
            System.out.println("Empty String");
        }
        else {
            System.out.println(s);
        }
    }
}
