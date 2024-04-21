import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-algorithms',
  templateUrl: './sort-algorithms.component.html',
  styleUrl: './sort-algorithms.component.css'
})
export class SortAlgorithmsComponent implements OnInit {

  mergeSortTimesToEnter: number = 0;
  mergeTimesToEnter: number = 0;


  merge(arr: number[], l: number, m: number, r: number) {

    this.mergeTimesToEnter++;
    console.log('merge times to enter ' + this.mergeTimesToEnter);
    console.log('L = ' + l, 'M = ' + m, 'R = ' + r);
    var n1 = m - l + 1;
    var n2 = r - m;

    console.log('Left side array length is ' + n1, 'Right side array length ' + n2);

    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
      L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
      R[j] = arr[m + 1 + j];

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    var i = 0;

    // Initial index of second subarray
    var j = 0;

    // Initial index of merged subarray
    var k = l;

    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      }
      else {
        arr[k] = R[j];
        j++;
      }
      k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }

  }

  partition(arr: number[], low: number, high: number) {
    // Choosing the pivot
    let pivot = arr[high];

    // Index of smaller element and indicates the right position of pivot found so far
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
      // If current element is smaller than the pivot
      if (arr[j] < pivot) {
        // Increment index of smaller element
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to its correct position
    return i + 1; // Return the partition index
  }

  sort(arr: number[]) {
    var N = arr.length;

    // Build heap (rearrange array)
    for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
      this.heapSort(arr, N, i);

    // One by one extract an element from heap
    for (var i = N - 1; i > 0; i--) {
      // Move current root to end
      var temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;

      // call max heapSort on the reduced heap
      this.heapSort(arr, i, 0);
    }

    console.log('heapSort ' + arr);
  }


  selectionSort(array: number[]) {
    let n = array.length;
    //console.log(n);

    for (let i = 0; i < n - 1; i++) {
      let min_idx = i;
      for (let j = i + 1; j < n; j++) {
        if (array[j] < array[min_idx]) {
          min_idx = j;
        }
        // Swap the found minimum element with the first element
        var temp = array[min_idx];
        array[min_idx] = array[i];
        array[i] = temp;
      }
    }
    console.log('selectionSort ' + array);
    //Time Complexity: The time complexity of Selection Sort is O(N^2)
  }




  bubbleSort(array: number[]) {
    let n = array.length;
    let swapped: boolean;
    for (let i = 0; i < n - 1; i++) {
      swapped = false;
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          swapped = true;
        }
      }
      if (swapped == false)
        break;
    }
    console.log('bubbleSort ' + array);

    //Time Complexity: O(N^2)
  }

  insertionSort(array: number[]) {
    let n = array.length;
    let j: number;
    for (let i = 1; i < n; i++) {
      let key = array[i];
      j = i - 1;
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j = j - 1;
      }
      array[j + 1] = key;
    }
    console.log('insertionSort ' + array);

    //Time Complexity: O(N^2)
  }

  mergeSort(array: number[], l: number, r: number) {

    console.log('Given Array is ' + '[' + array + ']');

    this.mergeSortTimesToEnter++;
    console.log('merge sort times to enter ' + this.mergeSortTimesToEnter);

    if (l >= r) {
      console.log('if (l >= r)' + 'L = ' + l, 'R = ' + r);
      return;
    }
    //console.log(Math.floor((r - l) / 2));

    var m = l + Math.floor((r - l) / 2);
    console.log('L = ' + l, 'M = ' + m, 'L = ' + r);
    this.mergeSort(array, l, m);
    this.mergeSort(array, m + 1, r);
    this.merge(array, l, m, r);

    console.log('mergeSort ' + array);

    //Worst Case: O(n log n), When the array is sorted in reverse order.
  }

  quickSort(arr: number[], low: number, high: number) {
    if (low < high) {
      // pi is the partitioning index, arr[pi] is now at the right place
      let pi = this.partition(arr, low, high);

      // Separately sort elements before partition and after partition
      this.quickSort(arr, low, pi - 1);
      this.quickSort(arr, pi + 1, high);


    }
    console.log('quickSort ' + arr);

    //Worst Case: O(N^2)
  }

  heapSort(arr: number[], N: number, i: number) {
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < N && arr[l] > arr[largest])
      largest = l;

    // If right child is larger than largest so far
    if (r < N && arr[r] > arr[largest])
      largest = r;

    // If largest is not root
    if (largest != i) {
      var swap = arr[i];
      arr[i] = arr[largest];
      arr[largest] = swap;

      // Recursively heapSort the affected sub-tree
      this.heapSort(arr, N, largest);
    }

    //Time Complexity: O(N log N)
  }


  ngOnInit(): void {
    //this.selectionSort([64, 25, 12, 22, 11]);

    //this.bubbleSort([64, 25, 12, 22, 11]);

    //this.insertionSort([64, 25, 12, 22, 11]);

    // var arrToMergeSort = [3, 2, 1, 6, 5, 4];
    // var arr_size = arrToMergeSort.length;
    // this.mergeSort(arrToMergeSort, 0, arr_size - 1);

    let arrToQuickSort = [3, 2, 1, 6, 5, 4];
    let N = arrToQuickSort.length;
    this.quickSort(arrToQuickSort, 0, N - 1);

    // var arrToHeapSort = [12, 11, 13, 5, 6, 7];
    // this.sort(arrToHeapSort);


  }

}
