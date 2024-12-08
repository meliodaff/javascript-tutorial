package polymorphism;

public class Main{
    public static void main(String[] args) {
        Animal dog = new Dog();

        System.out.println(dog.greet("Boots"));
        dog.greet();
    }
}