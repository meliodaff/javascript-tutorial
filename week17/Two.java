package week17;
public class Two {
    public static void main(String[] args) {
        
        byte[] root = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        byte sum =  0;
        for (int i = 0; i < root.length; i++) {
            sum = (byte) (sum + root[i]);
        }
        System.out.println(sum);
    }
}
