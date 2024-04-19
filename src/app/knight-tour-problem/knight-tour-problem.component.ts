import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knight-tour-problem',
  templateUrl: './knight-tour-problem.component.html',
  styleUrl: './knight-tour-problem.component.css'
})
export class KnightTourProblemComponent implements OnInit {

  N: number = 8;

  // A utility function to check if i,j are
  // valid indexes for N*N chessboard
  isSafe(x: number, y: number, sol: any) {
    return (x >= 0 && x < this.N && y >= 0 &&
      y < this.N && sol[x][y] == -1);
  }

  // A utility function to print solution
  // matrix sol[N][N]
  printSolution(sol: any) {
    for (let x = 0; x < this.N; x++) {
      for (let y = 0; y < this.N; y++)
        console.log(sol[x][y] + " ");

      console.log("\n");
    }
  }

  // This function solves the Knight Tour problem
  // using Backtracking.  This  function mainly
  // uses solveKTUtil() to solve the problem. It
  // returns false if no complete tour is possible,
  // otherwise return true and prints the tour.
  // Please note that there may be more than one
  // solutions, this function prints one of the
  // feasible solutions.
  solveKT() {
    let sol = new Array(this.N);
    for (var i = 0; i < sol.length; i++) {
      sol[i] = new Array(this.N);
    }

    // Initialization of solution matrix
    for (let x = 0; x < this.N; x++)
      for (let y = 0; y < this.N; y++)
        sol[x][y] = -1;

    // xMove[] and yMove[] define next move of Knight.
    // xMove[] is for next value of x coordinate
    // yMove[] is for next value of y coordinate
    let xMove = [2, 1, -1, -2, -2, -1, 1, 2];
    let yMove = [1, 2, 2, 1, -1, -2, -2, -1];

    // Since the Knight is initially at the first block
    sol[0][0] = 0;

    // Start from 0,0 and explore all tours using
    // solveKTUtil()
    if (!this.solveKTUtil(0, 0, 1, sol, xMove, yMove)) {
      console.log("Solution does not exist");
      return false;
    }
    else
      this.printSolution(sol);

    return true;
  }

  // A recursive utility function to solve Knight
  // Tour problem
  solveKTUtil(x: number, y: number, movei: number, sol: any, xMove: any, yMove: any) {
    let k, next_x, next_y;
    if (movei == this.N * this.N)
      return true;

    // Try all next moves from the
    // current coordinate x, y
    for (k = 0; k < 8; k++) {
      next_x = x + xMove[k];
      next_y = y + yMove[k];

      if (this.isSafe(next_x, next_y, sol)) {
        sol[next_x][next_y] = movei;
        if (this.solveKTUtil(next_x, next_y, movei + 1,
          sol, xMove, yMove))
          return true;
        else
          sol[next_x][next_y] = -1; // backtracking
      }
    }
    return false;
  }

  ngOnInit(): void {
    // Driver code

    // Function Call
    this.solveKT();
  }


}
