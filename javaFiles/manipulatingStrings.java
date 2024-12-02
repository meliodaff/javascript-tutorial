import java.util.Arrays;
public class manipulatingStrings{
    public static void main(String[] args){
       
       /* String sentence = "The quick brown fox jumps over the lazy dog";
        String[] words = sentence.split(" ");

        System.out.println(words);
*/
        Car car1 = new Car();

        car1.name = "Ford";
        car1.type = "Mustang";
        car1.color = "Orange";

        String studentA = new String("Jay");
        String studentB = studentA;

        System.out.println(studentA);
        System.out.println(studentB);
        System.out.println(studentA == studentB);

        studentB = "Bialen";
        System.out.println();

        System.out.println(studentA);
        System.out.println(studentB);

        System.out.println(studentA == studentB);
    }
}