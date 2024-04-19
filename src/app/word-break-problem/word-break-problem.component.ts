import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-break-problem',
  templateUrl: './word-break-problem.component.html',
  styleUrl: './word-break-problem.component.css'
})
export class WordBreakProblemComponent implements OnInit {

  // A recursive program to print all possible
  // partitions of a given string into dictionary
  // words

  // Prints all possible word breaks of given string
  wordBreak(n: number, dict: string[], s: string) {
    let ans = "";
    this.wordBreakUtil(n, s, dict, ans);
  }

  wordBreakUtil(n: number, s: string, dict: string[], ans: string) {
    for (let i = 1; i <= n; i++) {

      // Extract substring from 0 to i in prefix
      let prefix = s.substring(0, i);

      // If dictionary contains this prefix, then
      // we check for remaining string. Otherwise
      // we ignore this prefix (there is no else for
      // this if) and try next
      if (dict.includes(prefix)) {
        // If no more elements are there, print it
        if (i == n) {

          // Add this element to previous prefix
          ans += prefix;
          console.log(ans + "\n");
          return;
        }
        this.wordBreakUtil(n - i, s.substring(i, n), dict, ans + prefix + " ");
      }
    }
  }

  ngOnInit(): void {
    // main function
    let str1 = "iloveicecreamandmango"; // for first test case
    let str2 = "ilovesamsungmobile";     // for second test case
    let n1 = str1.length;                 // length of first string
    let n2 = str2.length;                 // length of second string

    // List of strings in dictionary
    let dict = ["mobile", "samsung", "sam", "sung",
      "man", "mango", "icecream", "and",
      "go", "i", "love", "ice", "cream"];
    console.log("First Test: \n");

    // call to the method
    this.wordBreak(n1, dict, str1);
    console.log("\n Second Test: \n");

    // call to the method
    this.wordBreak(n2, dict, str2);

    //O(2n). Because there are 2n combinations in The Worst Case.
    //Where n is the length of the input string.
  }

}
