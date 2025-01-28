package Bai3;

public class Pair <T,U>{
    private T first;
    private U second;
    public Pair(T first, U second) {
        this.first = first;
        this.second = second;
    }
    public String toString() {
        return "(" + first + "," + second + ")";
    }
}
