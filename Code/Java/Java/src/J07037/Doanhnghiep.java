package J07037;

public class Doanhnghiep implements Comparable<Doanhnghiep> {
        private String Businesscode,Businessname;
        private Integer Quantity;
        public Doanhnghiep(String Businesscode,String Businessname,Integer Quantity)
        {
            this.Businesscode = Businesscode;
            this.Businessname = Businessname;
            this.Quantity = Quantity;
        }
        public String toString()
        {
            return Businesscode +  " " + Businessname + " " + Quantity;
        }
        public int compareTo(Doanhnghiep other)
        {
            return this.Businesscode.compareTo(other.Businesscode);//So sanh kieu String
           // return Integer.compare(this.Quantity,other.Quantity); //So sanh kieu Integer;
        }
}
