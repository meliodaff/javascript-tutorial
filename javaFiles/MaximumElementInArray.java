
public class MaximumElementInArray{
    public static void main(String[] args) {
        
        byte[] array = {5, 8, 3, 12, 6};
        byte[] array1 = {-10, -3, -7, -1};

        System.out.println(findMaxInArray(array));
        System.out.println(findMaxInArray(array1));

    }
    public static String findMaxInArray(byte[] array){

        byte temp = array[0];
        for (int i = 1; i < array.length; i++) {
            if(temp < array[i]){
                temp = array[i];
            }
        }

        return "Maximum element = : " + temp;
    }
}