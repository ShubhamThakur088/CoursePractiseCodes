import java.util.Scanner;
import java.text.NumberFormat;
import java.util.Locale;
import java.util.Currency;
public class Currency_Procure 
{
    public static void main(String args[])
    {
        Scanner s=new Scanner(System.in);
        double curr=s.nextDouble();
        Locale loc=new Locale("en", "IN");
        NumberFormat us= NumberFormat.getCurrencyInstance(Locale.US);
        NumberFormat china= NumberFormat.getCurrencyInstance(Locale.CHINA);
        NumberFormat france= NumberFormat.getCurrencyInstance(Locale.FRANCE);
        NumberFormat india= NumberFormat.getCurrencyInstance(loc);
        
         
      
        
        
        System.out.println("US: " + us.format(curr));
        System.out.println("INDIA: " + india.format(curr));

        System.out.println("China: " + china.format(curr));
        System.out.println("France: " + france.format(curr));
    }
}
