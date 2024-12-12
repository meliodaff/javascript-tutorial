public class AverageElements {
    public static void main(String[] args) {
        byte[] array = {5, 5, 5, 5, 5};

        System.out.println(average(array));
    }
    public static String average(byte[] array){
        byte sum = 0;
        for (byte i = 0; i < array.length; i++) {
            sum += array[i];
        }
        byte average = (byte) (sum / array.length);
        return "Average = " + average;
    }
}
