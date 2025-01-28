package J7017;

public class Pair <k,v>{
    private k first;
    private v second;
    public Pair(k a, v b)
    {
        this.first = a;
        this.second = b;
    }
    public boolean prime(int n)
    {
        if(n <= 1)
            return false;
        for (int i =2 ;i<= Math.sqrt(n);i++)
        {
            if(n%i == 0)
                return false;
        }
        return true;
    }
    public boolean isPrime()
    {
        if(first instanceof Integer && second instanceof Integer )
            return prime((Integer) first) && prime((Integer) second);
        return false;
    }
    public String toString()
    {
        return first+ " " +second;
    }
}
