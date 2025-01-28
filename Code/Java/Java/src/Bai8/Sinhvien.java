package Bai8;
import java.util.*;
public class Sinhvien implements Comparable<Sinhvien> {
        private String msv,hoten,lop,gmail,sdt;
        public Sinhvien(String msv, String hoten, String lop, String gmail, String sdt) {
            this.msv = msv;
            this.hoten = hoten;
            this.lop = lop;
            this.gmail = gmail;
            this.sdt = '0'+ sdt;
        }
        public String toString() {
            return msv +" "+ hoten+" " + lop+" " + gmail+" " + sdt;
        }
        public int compareTo(Sinhvien other) {
            int LopCompare = this.lop.compareTo(other.lop);
            if(LopCompare != 0)
            {
                return LopCompare;
            }
            return this.msv.compareTo(other.msv);
        }
    }

