import java.util.Scanner;
public class Program{
    public static void main (String[] args){

        String a = new String("Programming");
        String b = "programming";
        Scanner sc = new Scanner(System.in);

        int y = 3;
        String result = y == 1 ? "okay" : y == 2 ? "nope" : "false";
        System.out.println(result);
        int number = 123;
        long number1 = number;
        System.out.println(number1);
        
        int variable = sc.nextInt();
        
    }

    public boolean isPalindrome(String word){
        int start = 0;
        int end = word.length() - 1;

        while (start < end){
            if(word.charAt(start) == word.charAt(end)){
                start++;
                end--;
            }
            else{
                System.out.println("false na");
                return false;
            }
        }
        return true;
    }
}