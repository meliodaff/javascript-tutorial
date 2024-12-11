package abstractt;

public class Student {
    private int id;
    private String firstName;
    private String lastName;
    public static int numberOfStudents;

    public Student(){
        numberOfStudents = numberOfStudents + 1;
    }
    public void setId(int id){
        this.id = id;
    }
    public int getId(){
        return id;
    }
    public void setFirstName(String firstName){
        this.firstName = firstName;
    }
    public String getFirstName(){
        return firstName;
    }
    public void setLastName(String lastName){
        this.lastName = lastName;
    }
    public String getLastName(){
        return lastName;
    }
    public String getFullName(){
        return firstName + " " + lastName;
    }
}
