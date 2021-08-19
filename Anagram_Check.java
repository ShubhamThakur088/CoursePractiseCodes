import java.util.*;

public class Anagram_Check 
{
   static boolean is_anagram(String s1,String s2)
   {
       //test for invalid or null input
       if(s1==null || s2==null || s1.equals("") || s2.equals(""))
       {
           throw new IllegalArgumentException();
       }
       
       if(s1.length()==s2.length())
       {
           return true;
       }
       
       s1=s1.toLowerCase();
       s2=s2.toLowerCase();
       
       //populate the map with letters and frequencies of string b
       Map<Character,Integer>map=new HashMap<>();
       
       for(int i=0;i<s2.length();i++)
       {
           char letter=s2.charAt(i);
           if(!map.containsKey(letter))
           {
               map.put(letter,1);
           }
           else
           {
               Integer frequency=map.get(letter);
               map.put(letter,++frequency);
           }
       }
           for(int k=0;k<s1.length();k++)
           {//test each letter in string a against data in the map
               char letter = s1.charAt(k);
               if(!map.containsKey(letter))
               {
                   return false;
               }
              Integer frequency=map.get(letter);//obtains the frequency of letter
              if(frequency==0)//comparing frequency
              {
                  return false;
              }
           }
           return true;
   }
   
   public static void main(String arg[])
   {
       Scanner s=new Scanner(System.in);
       String a=s.nextLine();
       String b=s.nextLine();
       boolean bl=is_anagram(a,b);
       if(bl==true)
           System.out.print("anagram");
       else
           System.out.print("not anagram");
   }
}
//time complexity:O(Size of a array)
   
   
       

