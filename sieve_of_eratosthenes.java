import java.util.*;

public class sieve_of_eratosthenes
{
    static void sieve(int n)
    {
        boolean prime[]=new boolean[n];
        for(int i=0;i<n;i++)
        {
            prime[i]=true;//initialise all indices to true
        }
        
        for(int i=2;(i*i)<n;i++)//begin from 2 and go upto n in i*i(2*2,3*3,...)form 
        {
            if(prime[i]==true)//checks if i*i is true
            {
                for(int j=i*i;j<n;j=j+i)/*starts from i*i and overwrites the multiple of ith position with false*/ 
                {
                    prime[j]=false;
                }                
            }
        }
        
        for(int i=2;i<n;i++)
        {
            if(prime[i]==true)
            {
                System.out.print(i+" ");
            }            
        }
        System.out.println();
    }
    
    public static void main(String arg[])
    {
        Scanner s=new Scanner(System.in);
        int n=s.nextInt();
        sieve(n);                
    }
}
