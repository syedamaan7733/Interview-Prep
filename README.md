# LeetCode Solutions

## Linked List Problems

### 1. Add Two Numbers

[LeetCode Problem Link](https://leetcode.com/problems/add-two-numbers/description/)

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0);
  let carry = 0;
  let cur = dummy;

  while (l1 || l2) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    cur.next = new ListNode(sum % 10);
    cur = cur.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry) cur.next = new ListNode(carry);

  return dummy.next;
};
```

### 2. Other Linked List Problems

- [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/description/)
- [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)
- [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/description/)
- [Rotate List](https://leetcode.com/problems/rotate-list/description/)
- [Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/description/)
- [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/description/)
- [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/description/)
- [Delete the Middle Node of a Linked List](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/)
- [Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/description/)
- [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/description/)

---

## 2D Array (Matrix) Problems

### 1. Island Perimeter

[LeetCode Problem Link](https://leetcode.com/problems/island-perimeter/description/)

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let perimeter = 0;
  let rows = grid.length;
  let cols = grid[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) {
        perimeter += 4;
        if (row > 0 && grid[row - 1][col] === 1) perimeter -= 2;
        if (col > 0 && grid[row][col - 1] === 1) perimeter -= 2;
      }
    }
  }
  return perimeter;
};
```

### 2. Flipping the Image

[Flipping an Image](https://leetcode.com/problems/flipping-an-image/description/)

```javascript
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  let revImage = image.map((item) =>
    item.reverse().map((ele) => (ele === 1 ? 0 : 1))
  );
  return revImage;
};
```

### 2. Other Matrix Problems

- [Reshape the Matrix](https://leetcode.com/problems/reshape-the-matrix/description/)
- [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/description/)
- [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/description/)
- [Transpose Matrix](https://leetcode.com/problems/transpose-matrix/description/)
- [Matrix Diagonal Sum](https://leetcode.com/problems/matrix-diagonal-sum/description/)
- [Delete Greatest Value in Each Row](https://leetcode.com/problems/delete-greatest-value-in-each-row/description/)

### 3. Spiral Matrix

[LeetCode Problem Link](https://leetcode.com/problems/spiral-matrix/description/)

```javascript
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var spiralOrder = function (mat) {
  let res = [];
  let top = 0,
    bottom = mat.length - 1;
  let left = 0,
    right = mat[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) res.push(mat[top][i]);
    top++;

    for (let i = top; i <= bottom; i++) res.push(mat[i][right]);
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) res.push(mat[bottom][i]);
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) res.push(mat[i][left]);
      left++;
    }
  }
  return res;
};
```

### 4. Zigzag Traversal

[LeetCode Problem Link](https://leetcode.com/problems/zigzag-grid-traversal-with-skip/description/)

```javascript
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var zigzagTraversal = function (grid) {
  let res = [];
  let top = 0,
    bottom = grid.length - 1;
  let right = grid[0].length - 1,
    left = 0;
  let print = true;

  while (top <= bottom) {
    for (let i = left; i <= right; i++) {
      if (print) {
        res.push(grid[top][i]);
        print = false;
      } else {
        print = true;
      }
    }
    top++;
    if (top > bottom) break;

    for (let i = right; i >= left; i--) {
      if (print) {
        res.push(grid[top][i]);
        print = false;
      } else {
        print = true;
      }
    }
    top++;
  }
  return res;
};
```

---

This README provides a structured reference to commonly solved Linked List and 2D Matrix problems from LeetCode along with their solutions in JavaScript. 🚀
