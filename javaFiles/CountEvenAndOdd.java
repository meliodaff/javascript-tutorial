import java.util.Arrays;

public class CountEvenAndOdd{
    public static void main(String[] args) {
        
        int array[] = {10, 20, 30, 15, 25};
        System.out.println(count(array));

    }
    public static String count(int array[]){
        int even = 0;
        int odd = 0;
        for (int i = 0; i < array.length; i++) {
                if(array[i] % 2 == 0){
                    even++;
                }
                else{
                    odd++;
                }
        }
        String result = "Even = " + even + "\nOdd = " + odd;
        return result;
    }
}