import java.util.Scanner;
//Non-optimal appraoch
public class RepeatedAsInAString
{
    public static void main(String arg[])
    {
        Scanner s=new Scanner(System.in);
        String str=s.nextLine();
        int n=s.nextInt();
        int count=0,str_len=0;
        if((str.length())==1)
        {
            System.out.println(n);
            System.exit(0);
        }
        for(int i=0;i<n;i++)
        {
            char ch=str.charAt(i);
            str=str+ch;
            str_len=str.length();
            if(str_len==n || str.charAt(i)=='a')
            {   
                count++;
                //System.out.println("lenght is equal"+":"+str);                
            }
        }
        System.out.println(count);
    }       
}    

