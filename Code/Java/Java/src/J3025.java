import java.util.Scanner;
public class J3025
{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int t = Integer.parseInt(in.nextLine());
        while(t-->0)
        {
            String s = in.nextLine();
            if (s.length() == 1)
            {
                System.out.println("YES");
                continue;
            }
            StringBuilder s2 = new StringBuilder(s);
            String s3 = s2.reverse().toString();
            int dem = 0;
            for(int i =0;i<(s.length()/2);i++)
            {
                if (s.charAt(i) != s3.charAt(i))
                {
                    dem ++;
                }
            }
            if(dem <= 1 && (s.length() & 1) == 1 )
            {
                System.out.println("YES");
            }
            else if(dem == 1 && (s.length() & 1) == 0)
            {
                System.out.println("YES");
            }
            else
            {
                System.out.println("NO");
            }
        }
    }
}
