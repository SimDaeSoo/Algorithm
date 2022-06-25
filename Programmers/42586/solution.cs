using System;

public class Solution
{
  public int[] solution(int[] progresses, int[] speeds)
  {
    int[] answer = new int[] { };

    for (int i = 0; i < progresses.Length; i++)
    {
      int duration = getDistributeDuration(progresses[i], speeds[i]);
      Console.WriteLine(duration);
    }

    return answer;
  }

  public int getDistributeDuration(int currentProgress, int speed)
  {
    int duration = (int)Math.Ceiling((100.0 - (double)currentProgress) / (double)speed);
    return duration;
  }
}