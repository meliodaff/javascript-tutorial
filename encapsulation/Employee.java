package encapsulation;

public class Employee {
    
    private String name;
    private double basicSalary;
    
    public Employee(String name, double basicSalary){
        setName(name);
        setBasicSalary(basicSalary);
    }
    
    public void setName(String name){
        if(name == null || name.equalsIgnoreCase("null")){
            throw new IllegalArgumentException("Invalid name");
        }
        this.name = name;
    }
    
    public String getName(){
        return name;
    }

    public void setBasicSalary(double basicSalary){
        if(basicSalary <= 0){
            throw new IllegalArgumentException("No salary are below 0");
        }
        this.basicSalary = basicSalary;
    }
    
    public double getBasicSalary(){
        return basicSalary;
    }

    public double calculateTax(){
        double tax = basicSalary * 0.12;
        return tax;
    }
}
