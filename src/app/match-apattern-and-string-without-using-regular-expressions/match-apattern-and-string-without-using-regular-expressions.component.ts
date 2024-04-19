import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-apattern-and-string-without-using-regular-expressions',
  templateUrl: './match-apattern-and-string-without-using-regular-expressions.component.html',
  styleUrl: './match-apattern-and-string-without-using-regular-expressions.component.css'
})
export class MatchAPatternAndStringWithoutUsingRegularExpressionsComponent implements OnInit {

  /*  Function to find out if string follows a given
    pattern or not

    str - given string
    n - length of given string
    i - current index in input string
    pat - given pattern
    m - length of given pattern
    j - current index in given pattern
    map - stores mapping between pattern and string */
  patternMatchUtil(str: string, n: number, i: number, pat: string, m: number, j: number, map: any) {
    // If both string and pattern reach their end
    if (i == n && j == m)
      return true;

    // If either string or pattern reach their end
    if (i == n || j == m)
      return false;

    // read next character from the pattern
    let ch = pat[j];

    // if character is seen before
    if (map.has(ch)) {
      let s = map.get(ch);
      let len = s.length;

      // consider next len characters of str
      let subStr = str.substr(i, len);

      // if next len characters of string str
      // don't match with s, return false
      if (subStr != s)
        return false;

      // if it matches, recurse for remaining characters
      return this.patternMatchUtil(str, n, i + len, pat, m,
        j + 1, map);
    }

    // If character is seen for first time, try out all
    // remaining characters in the string
    for (let len = 1; len <= n - i; len++) {
      // consider substring that starts at position i
      // and spans len characters and add it to map
      map.set(ch, str.substr(i, len));

      // see if it leads to the solution
      if (this.patternMatchUtil(str, n, i + len, pat, m, j + 1, map))
        return true;

      // if not, remove ch from the map
      map.delete(ch);
    }

    return false;
  }

  // A wrapper over patternMatchUtil()
  patternMatch(str: string, pat: string, n: number, m: number) {
    if (n < m)
      return false;

    // create an empty hashmap
    let map = new Map();

    // store result in a boolean variable res
    let res = this.patternMatchUtil(str, n, 0, pat, m, 0, map);

    // if solution exists, print the mappings
    console.log(map)
    for (let it of [...map.keys()].reverse())
      console.log(it + "->" + map.get(it) + "\n");

    // return result
    return res;
  }

  ngOnInit(): void {
    // Driver code
    let str_1 = "GeeksforGeeks", pat_1 = "GfG";
    let n_1 = str_1.length
    let m_1 = pat_1.length;

    if (!this.patternMatch(str_1, pat_1, n_1, m_1))
      console.log("No Solution exists");

    let str_2 = "GraphTreesGraph", pat_2 = "aba";
    let n_2 = str_2.length
    let m_2 = pat_2.length;

    if (!this.patternMatch(str_2, pat_2, n_2, m_2))
      console.log("No Solution exists");
  }

  //Time complexity of this code is O(2^m)
  //, where m is the length of the pattern

}
