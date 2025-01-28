package bai9p2;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.*;
import java.io.File;
public class Main {
    public static void main(String[] args) throws IOException , FileNotFoundException {
        Scanner in = new Scanner(new File("INSTITUTION.in"));
        Scanner in2 = new Scanner(new File("REGISTER.in"));
        int num = Integer.parseInt(in.nextLine());
        Map<String,Instit> ins = new HashMap<>();
        for (int i = 0; i < num; i++) {
            String[] line = in.nextLine().trim().split(" ",2);
            ins.put(line[0],new Instit(line[0],line[1]));
        }
        int num2 = Integer.parseInt(in2.nextLine().trim());
        ArrayList<Group> gp = new ArrayList<>();
        for (int i = 0; i < num2; i++) {
            String[] line2 = in2.nextLine().trim().split(" ",2);
            String ab = line2[0];
            int numg = Integer.parseInt(line2[1]);
            Instit ins1 = ins.get(ab);
            for (int j = 0; j < numg; j++) {
                String gpname = in2.nextLine().trim();
                gp.add(new Group(gpname, ins1.getname()));
            }
        }
        Collections.sort(gp);
        for (int i = 0; i < gp.size(); i++) {
            gp.get(i).setId(String.format("team%02d",i+1));
        }
     for(Group g : gp) {
         System.out.println(g);
     }
    }
}
