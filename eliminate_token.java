import java.util.*;
import java.io.*;
import java.lang.*;
public class eliminate_token 
{
    public static void main(String[] args) 
    {
        int count=0;
	Scanner s = new Scanner(System.in);
        String str=s.nextLine();
              
        String delim_free_str[]=str.split("\\W");
        
        for(int i=0;i<delim_free_str.length;i++)
        {
            count++;
        }
        System.out.println(count);
        
        for(int i=0;i<delim_free_str.length;i++)
       {
           System.out.print(delim_free_str[i]+"\n");
          
       }
    }
}
        
        
        
        
	
    