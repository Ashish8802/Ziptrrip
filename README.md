# Ziptrrip
Ziptrrip tech question's answers

Q1 :
answer

Method : 1

function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";

        for (let j = i; j >= 1; j--) {
            row += j;
        }

        console.log(row);
    }
}

Method : 2

function printPattern(n) {
    let i = 1;

    while (i <= n) {
        let j = i;
        let row = "";

        while (j >= 1) {
            row += j;
            j--;
        }

        console.log(row);
        i++;
    }
}

Q2:
Answer

Method 1:

function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log(reverseString("Bhaskara"));

Method : 2

function reverseString(str) {
    if (str === "") {
        return "";
    }

    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("Bhaskara"));

Q3:
Answer:

Method : 1

let arr = [1, 2, 3, 6, 4, 3, 7, 4, 2, 6, 8, 2, 5, 9, 0, 1];

let unique = [];
let seen = {};

for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
        seen[arr[i]] = true;
        unique.push(arr[i]);
    }
}

console.log(unique);

Method : 2

let arr = [1, 2, 3, 6, 4, 3, 7, 4, 2, 6, 8, 2, 5, 9, 0, 1];

let unique = [];

for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < unique.length; j++) {
        if (arr[i] === unique[j]) {
            isDuplicate = true;
            break;
        }
    }

    if (!isDuplicate) {
        unique.push(arr[i]);
    }
}

console.log(unique);


Q4:

Answers :

1. .box

 Selected Line Numbers:2, 6, 10
We will elect these lines because .box selects every element that has the class box.
Line 2 : class="box"
Line 6 : class="box"
Line 10 : class="box"
The reason why it does not select other lines is because Line 4 has class="box2", not box and other lines do not contain the class box.

2. div .box
Selected Line Numbers:
2, 6, 10
Why it selects those lines:
div .box means select any element with class box that has a <div> ancestor.
Line 2 is inside the div on line 1.
Line 6 is inside the div on line 5 (and also inside line 1).
Line 10 is inside the document body, which is also a parent element.
Therefore all three .box elements are selected.
Why it does not select other lines:
Line 4 has class box2.
Other lines do not have class box.

3. div.box
Selected Line Numbers:
2, 6, 10
Why it selects those lines:
div.box means a <div> element that also has class box.
Line 2 → <div class="box">
Line 6 → <div class="box">
Line 10 → <div class="box">
Why it does not select other lines:
Line 4 is a div but has class box2.
Other divs do not have class box.
6. [class]
Selected Line Numbers:
2, 4, 6, 10
Why it selects those lines:
[class] selects every element that contains a class attribute.
Line 2 → class="box"
Line 4 → class="box2"
Line 6 → class="box"
Line 10 → class="box"
Why it does not select other lines:
Lines 1 and 5 are divs but do not have a class attribute.
Other lines are closing tags or empty lines.
7. #container .box
Selected Line Numbers:
2, 6
Why it selects those lines:
#container .box selects all elements with class box that are descendants of the element with id container.
The container is on line 1.
Inside it:
Line 2 → class box
Line 6 → class box
Why it does not select other lines:
Line 10 is outside #container.
Line 4 has class box2.
8. #container > .box
Selected Line Numbers:
2
Why it selects those lines:
> means direct child.
Inside #container:
Line 2 is a direct child and has class box 
Line 6 has class box but is inside another div (line 5), so it is not a direct child 
Why it does not select other lines:
Line 6 is a grandchild, not a direct child.
Line 10 is outside #container.
Line 4 has class box2.


Q5:

Method : 1
#container {
    position: relative;
    width: 100%;
    height: 50px;
}

.left.fixed.box {
    position: absolute;
    left: 0;
    width: 100px;
}

.right.fixed.box {
    position: absolute;
    right: 0;
    width: 100px;
}

.middle.expanding.box {
    margin-left: 100px;
    margin-right: 100px;
}

Method : 2 

#container {
    display: flex;
    width: 100%;
}

.left.fixed.box,
.right.fixed.box {
    width: 100px;
    flex-shrink: 0;
}

.middle.expanding.box {
    flex: 1;
}












