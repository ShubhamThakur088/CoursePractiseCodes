import java.util.Scanner;
import java.util.regex.Pattern;
import java.util.regex.PatternSyntaxException;

public class ReGexValidator
{
    public static void main(String arg[])
    {
        Scanner s=new Scanner(System.in);
        String str_re_pat=s.nextLine();
        try
        {
            Pattern pat=Pattern.compile(str_re_pat);
            System.out.println("Valid");
        }
        
        catch(PatternSyntaxException pse)
        {
            System.out.println("Invalid");
        }
    }
    
}
