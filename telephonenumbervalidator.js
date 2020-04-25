function telephoneCheck(str) {
  let telephoneArr = str.split('');
  let firstIndex = telephoneArr[0];
  let num = /\d/;
  let open = /\(/;
  let closed = /\)/;
  let dash = /-/;
  let space = /\s/;

  // CONDITIONS IF INDEX 0 BEGINS WITH A NUMBER
  if (num.test(firstIndex)) {
    // CONDITION FOR FORMAT 5555555555
    if (telephoneArr.length === 10) {
      return telephoneArr.every(Number);
    }
    // CONDITION FOR 555-555-5555 OR 555 555 5555 FORMAT
    else if (telephoneArr.length === 12) {
      let format = [];
      // TEST FOR 0-2 INDICES
      telephoneArr.slice(0, 3).map((x) => {
        if (num.test(x)) {
          return format.push(x);
        }
      });
      // TEST INDEX 3
      if (dash.test(telephoneArr[3]) || space.test(telephoneArr[3])) {
        format.push(telephoneArr[3]);
      }
      // TEST 4-7 INDICES
      telephoneArr.slice(4, 8).map((x) => {
        if (num.test(x)) {
          return format.push(x);
        }
      });
      // TEST INDEX 7
      if (dash.test(telephoneArr[7]) || space.test(telephoneArr[7])) {
        format.push(telephoneArr[7]);
      }
      // TEST 8-11 INDICES
      telephoneArr.slice(8).map((x) => {
        if (num.test(x)) {
          return format.push(x);
        }
      });
      // TEST FORMAT, IF LESS THAN 12, THE FORMAT DIDN'T PASS THE TEST
      let test = 12;
      return format.length === test;
    }
    // CONDITION FOR 1 555 555 5555 OR 1 555-555-5555 OR 1(555)555-5555 FORMAT
    else if (telephoneArr.length === 14) {
      let format = [];
      // TEST INDEX 0
      if (num.test(telephoneArr[0])) {
        format.push(telephoneArr[0]);
      }
      // TEST INDEX 1
      if (
        dash.test(telephoneArr[1]) ||
        space.test(telephoneArr[1]) ||
        open.test(telephoneArr[1])
      ) {
        if (open.test(telephoneArr[1])) {
          closed.test(telephoneArr[5]) ? format.push(telephoneArr[1]) : false;
        } else {
          format.push(telephoneArr[1]);
        }
      }
      // TEST 2-4 INDICES
      telephoneArr.slice(2, 5).map((x) => {
        if (num.test(x)) {
          return format.push(x);
        }
      });
      // TEST INDEX 5
      if (
        dash.test(telephoneArr[5]) ||
        space.test(telephoneArr[5]) ||
        closed.test(telephoneArr[5])
      ) {
        if (closed.test(telephoneArr[5])) {
          open.test(telephoneArr[1]) ? format.push(telephoneArr[1]) : false;
        } else {
          format.push(telephoneArr[1]);
        }
      }
      // TEST 6-8 INDICES
      telephoneArr.slice(6, 9).map((x) => {
        if (num.test(x)) {
          return format.push(x);
        }
      });
      // TEST INDEX 9
      if (dash.test(telephoneArr[9]) || space.test(telephoneArr[9])) {
        format.push(telephoneArr[9]);
      }
      // TEST 10-13 INDICES
      telephoneArr.slice(10).map((x) => {
        if (num.test(x)) {
          return format.push(x);
        }
      });
      // TEST FORMAT, IF LESS THAN 14, THE FORMAT DIDN'T PASS THE TEST
      let test = 14;
      return format.length === test;
    }
    // CONDITION FOR 1 (555) 555-5555 FORMAT
    else if (telephoneArr.length === 16) {
      let format = [];
      // TEST INDEX 0
      if (num.test(telephoneArr[0])) {
        format.push(telephoneArr[0]);
      }
      // TEST INDEX 1
      if (dash.test(telephoneArr[1]) || space.test(telephoneArr[1])) {
        format.push(telephoneArr[1]);
      }
      // TEST INDEX 2
      if (open.test(telephoneArr[2])) {
        format.push(telephoneArr[2]);
      }
      // TEST 3-5 INDICES
      telephoneArr.slice(3, 6).map((x) => {
        if (num.test(x)) {
          return format.push(x);
        }
      });
      // TEST INDEX 6
      if (closed.test(telephoneArr[6])) {
        format.push(telephoneArr[6]);
      }
      // TEST INDEX 7
      if (space.test(telephoneArr[7])) {
        format.push(telephoneArr[7]);
      }
      // TEST 8-10 INDICES
      telephoneArr.slice(8, 11).map((x) => {
        if (num.test(x)) {
          return format.push(x);
        }
      });
      // TEST INDEX 11
      if (dash.test(telephoneArr[11]) || space.test(telephoneArr[11])) {
        format.push(telephoneArr[11]);
      }
      // TEST 12-15 INDICES
      telephoneArr.slice(12).map((x) => {
        if (num.test(x)) {
          return format.push(x);
        }
      });
      // TEST FORMAT, IF LESS THAN 16, THE FORMAT DIDN'T PASS THE TEST
      let test = 16;
      return format.length === test;
    } else {
      return false;
    }
  }

  // CONDITIONS IF INDEX 0 BEGINS WITH AN OPEN PARATHESIS '('
  if (open.test(firstIndex)) {
    // CONDITION FOR (555)555-5555 or (555)555 5555
    if (telephoneArr.length === 13) {
      let format = [];
      // TEST INDEX 0
      if (open.test(telephoneArr[0])) {
        format.push(telephoneArr[0]);
      }
      // TEST 1-3 INDICES
      telephoneArr.slice(1, 4).map((x) => {
        if (num.test(x)) {
          return format.push(x);
        }
      });
      // TEST INDEX 4
      if (closed.test(telephoneArr[4])) {
        format.push(telephoneArr[4]);
      }
      // TEST 5-7 INDICES
      telephoneArr.slice(5, 8).map((x) => {
        if (num.test(x)) {
          return format.push(x);
        }
      });
      // TEST INDEX 8
      if (dash.test(telephoneArr[8]) || space.test(telephoneArr[8])) {
        format.push(telephoneArr[8]);
      }
      // TEST 9-12 INDICES
      telephoneArr.slice(9).map((x) => {
        if (num.test(x)) {
          return format.push(x);
        }
      });
      // TEST FORMAT, IF LESS THAN 16, THE FORMAT DIDN'T PASS THE TEST
      let test = 13;
      return format.length === test;
    }
    // CONDITION FOR (555) 555-5555 (555) 555 5555
    else if (telephoneArr.length === 14) {
      let format = [];
      // TEST INDEX 0
      if (open.test(telephoneArr[0])) {
        format.push(telephoneArr[0]);
      }
      // TEST 1-3 INDICES
      telephoneArr.slice(1, 4).map((x) => {
        if (num.test(x)) {
          return format.push(x);
        }
      });
      // TEST INDEX 4
      if (closed.test(telephoneArr[4])) {
        format.push(telephoneArr[4]);
      }
      // TEST INDEX 5
      if (space.test(telephoneArr[5])) {
        format.push(telephoneArr[5]);
      }
      // TEST 6-8 INDICES
      telephoneArr.slice(6, 9).map((x) => {
        if (num.test(x)) {
          return format.push(x);
        }
      });
      // TEST INDEX 9
      if (dash.test(telephoneArr[9]) || space.test(telephoneArr[9])) {
        format.push(telephoneArr[9]);
      }
      // TEST 10-13 INDICES
      telephoneArr.slice(10).map((x) => {
        if (num.test(x)) {
          return format.push(x);
        }
      });
      // TEST FORMAT, IF LESS THAN 16, THE FORMAT DIDN'T PASS THE TEST
      let test = 14;
      return format.length === test;
    }
  } else {
    return false;
  }
}

// TEST FUNCTION
// console.log('FORMAT 555555555', telephoneCheck("5555555555"));
// console.log('=============================');
// console.log('FORMAT 555-555-5555', telephoneCheck("555-555-5555"));
// console.log('=============================');
// console.log('FORMAT 555 555 5555', telephoneCheck("555 555 5555"));
// console.log('=============================');
// console.log('FORMAT 1 555 555 5555', telephoneCheck("1 555 555 5555"));
// console.log('=============================');
// console.log('FORMAT 1 555-555-5555', telephoneCheck("1 555-555-5555"));
// console.log('=============================');
// console.log('FORMAT 1 (555) 555-5555', telephoneCheck("1 (555) 555-5555"));
// console.log('=============================');
// console.log('1(555)555-5555', telephoneCheck("1(555)555-5555"));
// console.log('=============================');
// console.log('(555)555-5555', telephoneCheck("(555)555-5555"));
// console.log('=============================');
// console.log('(555) 555 5555', telephoneCheck("(555) 555 5555"));
// console.log('=============================');
console.log('1 555)555-5555', telephoneCheck('1 555)555-5555'));
