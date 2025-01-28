import java.util.Scanner;
import java.util.Stack;

public class Bai14 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = Integer.parseInt(in.nextLine());
        for (int i = 0; i < n; i++) {
            int m = Integer.parseInt(in.nextLine().trim());
            String[] x = in.nextLine().trim().split("\\s+");
            System.out.println(fucc(x));
        }
    }
    private static long fucc(String[] x) {
        Stack<Long> st = new Stack<>();
        for (int i = x.length -1; i >= 0; i--) {
            String k = x[i];
            if(check(k))
            {
                long t1 = st.pop();
                long t2 = st.pop();
                long t3 = cl(k,t1,t2);
                st.push(t3);
            }
            else {
                st.push(Long.parseLong(k));
            }
        }
        return st.pop();
    }
    private static boolean check(String k) {
        return k.equals("+") || k.equals("-") || k.equals("*") || k.equals("/");
    }
    private static long cl(String k, long t1, long t2) {
        switch (k) {
            case "+": return t1 + t2;
            case "-" : return t1 - t2;
            case "*": return t1 * t2;
            case "/": return t1 / t2;
            default:
                return 0;
        }
    }
}
