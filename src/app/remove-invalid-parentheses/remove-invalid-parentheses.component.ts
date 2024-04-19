import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-invalid-parentheses',
  templateUrl: './remove-invalid-parentheses.component.html',
  styleUrl: './remove-invalid-parentheses.component.css'
})
export class RemoveInvalidParenthesesComponent implements OnInit {

  // method checks if character is parenthesis(open
  // or closed)
  isParenthesis(c: string) {
    return ((c == '(') || (c == ')'));
  }

  // method returns true if string contains valid
  // parenthesis
  isValidString(str: string) {
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == '(')
        cnt++;
      else if (str[i] == ')')
        cnt--;
      if (cnt < 0)
        return false;
    }
    return (cnt == 0);
  }

  // method to remove invalid parenthesis
  removeInvalidParenthesis(str: string) {
    if (str.length == 0)
      return;

    // visit set to ignore already visited string
    let visit = new Set();

    // queue to maintain BFS
    let q = [];
    let temp;
    let level = false;

    // pushing given string as
    // starting node into queue
    q.push(str);
    visit.add(str);
    while (q.length != 0) {
      str = q.shift();
      if (this.isValidString(str)) {
        console.log(str + "\n");

        // If answer is found, make level true
        // so that valid string of only that level
        // are processed.
        level = true;
      }
      if (level)
        continue;
      for (let i = 0; i < str.length; i++) {
        if (!this.isParenthesis(str[i]))
          continue;

        // Removing parenthesis from str and
        // pushing into queue,if not visited already
        temp = str.substring(0, i) + str.substring(i + 1);
        if (!visit.has(temp)) {
          q.push(temp);
          visit.add(temp);
        }
      }
    }
  }

  ngOnInit(): void {
    // Driver Code
    let expression_1 = "()())()";
    this.removeInvalidParenthesis(expression_1);

    let expression_2 = "(v)())()";
    this.removeInvalidParenthesis(expression_2);

    //the worst-case time complexity of the program is O(2^n),
    //where n is the length of the input string.
  }

}
