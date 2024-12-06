package inheritance;

public class Main {
    public static void main(String[] args) {
        Animal cat = new Cat();
        cat.walk();
        cat.greet();
        Animal dog = new Dog();

        dog.greet();
    }
}
