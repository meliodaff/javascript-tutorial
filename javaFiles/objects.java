public class objects{
    public static void main(String[] args) {
        Person person1 = new Person();

        person1.name = "Jay";
        Person person2 = person1;
        System.out.println(person1.name);
        System.out.println(person2.name);

        person2.name = "Bialen";
        System.out.println(person1.name);
        System.out.println(person2.name);

        System.out.println(person1 == person2);


        String name1 = "jay";
        String name2 = new String("jay");
        System.out.println(name1 == name2);
        name2 = "JAY";
        System.out.println(name1);
        System.out.println(name2);

        //objects referencing at another object are mutable while strings referencing to string are immutable
        //objects referencing to a string is not valid, vice versa

    }
    public static class Person{
        public String name;
        public int age;
    }
}