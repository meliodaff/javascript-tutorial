package encapsulation;

public class Main {
    public static void main(String[] args) {
        Employee employeeA = new Employee("Jv Bialen", 100_000);
        System.out.println(employeeA.getName());
        System.out.println(employeeA.getBasicSalary());

        
    }
}
