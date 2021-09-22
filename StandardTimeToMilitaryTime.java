import java.util.Scanner;

public class StandardTimeToMilitaryTime
{
    public static void main(String args[])
    {
        Scanner s=new Scanner(System.in);
        String time=s.nextLine();
        
        String hrs=time.substring(0,2);
        String minutes=time.substring(3,5);
        String sec=time.substring(6,8);
        String meridian=time.substring(8,10);
        
//        System.out.println(hrs);
//        System.out.println(minutes);
//        System.out.println(sec);
//        System.out.println(meridian);
        
        if(meridian.equals("PM"))
        {
            switch(Integer.parseInt(hrs))
            {
                case 12:System.out.println("12"+":"+minutes+":"+sec);break;
                case 1:System.out.println("13"+":"+minutes+":"+sec);break;
                case 2:System.out.println("14"+":"+minutes+":"+sec);break;
                case 3:System.out.println("15"+":"+minutes+":"+sec);break;
                case 4:System.out.println("16"+":"+minutes+":"+sec);break;
                case 5:System.out.println("17"+":"+minutes+":"+sec);break;
                case 6:System.out.println("18"+":"+minutes+":"+sec);break;
                case 7:System.out.println("19"+":"+minutes+":"+sec);break;
                case 8:System.out.println("20"+":"+minutes+":"+sec);break;
                case 9:System.out.println("21"+":"+minutes+":"+sec);break;
                case 10:System.out.println("22"+":"+minutes+":"+sec);break;
                case 11:System.out.println("23"+":"+minutes+":"+sec);break;                
            }          
        }
        
        if(hrs.equals("12") && meridian.equals("AM"))
        {
            System.out.println("00"+":"+minutes+":"+sec);            
        }
        
        if(meridian.equals("AM"))
        {
            System.out.println(hrs+":"+minutes+":"+sec);
        }
        
    }    
}
