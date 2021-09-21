"use strict";


// 1. printIndices
function printIndices(items) {
  // Print each item in the list, followed by its index.

  // The output should look like this:
  //     apple 0
  //     berry 1
  //     cherry 2

  // Arguments:
  //     items (list)

  // Returns:
  //     None
  // """

  // for i in range(len(items)):
  //     print(f'{items[i]} {i}')
  
  for (const i in items) {
    const item = items[i];
    const idx = i;
    console.log(`${item} = ${idx}`);
  }

}

// console.log(printIndices(['apple', 'berry', 'cherry']))


// 2. everyOtherItem
function everyOtherItem(items) {
  // Print a list of every other item in `items`

  // Start with index 0.

  // Arguments:
  //     items (list)
  // """

  // result = []

  // for i in range(len(items)):
  //     if i % 2 == 0:
  //         result.append(items[i])

  // print(result)

  const results = []
  
  for (const i in items) {
    if (i % 2 === 0) {
      results.push(items[i]);
    }
  } 
  console.log(results);
}

// console.log(everyOtherItem(['apple', 'berry', 'cherry', 'banana', 'pineapple']))


// 3. smallestNItems
function smallestNItems(items, n) {
  // Print a list of the `n` smallest integers in `items`.

  // Order the integers in descending order.

  // You can assume that `n` will be less than the length of the list.

  // Arguments:
  //     items (list[int]): A list of integers
  //     n (int): Desired length for the resulting list
  // """

  // sorted_items = sorted(items)
  // sorted_n_items = sorted_items[:n]
  // sorted_n_items.reverse()
  // print(sorted_n_items)

  // console.log(items);
  // console.log(items.sort(function(a, b){return b-a}));
  // console.log(items.sort((a, b) => b - a));
  const sortedItems = items.sort((a, b) => b - a);
  console.log(sortedItems);
  const slicedItems = sortedItems.slice(n);
  console.log(slicedItems);

}

console.log(smallestNItems([3, 7, 21, 54, 901, 1.5], 3))
