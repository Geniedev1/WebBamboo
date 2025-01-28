package J7045;

public class LoaiPhong implements Comparable<LoaiPhong>{
    private char Symbol;
    private String roomname;
    private int daypirce;
    private float fee;
    public LoaiPhong(String s)
    {
        String[] arr = s.trim().split("\\s+");
        this.Symbol = arr[0].charAt(0);
        this.roomname = arr[1];
        this.daypirce = Integer.parseInt(arr[2]);
        this.fee = Float.parseFloat(arr[3]);
    }
    public String toString() {
        return Symbol + " " + roomname + " " + daypirce + " " + fee;
    }
    public int compareTo(LoaiPhong other)
    {
        return this.roomname.compareTo(other.roomname);
    }
}
