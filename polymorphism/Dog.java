package polymorphism;

public class Dog extends Animal {

    public void greet(){
        System.out.println("Im a dog");
    }
    public String greet(String name){
      return "I am " + name;
    }
}
