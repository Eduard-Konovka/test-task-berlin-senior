console.log("\n=== Quadratic Enumeration ===");
const quadraticEnumeration = (dataArr, dataVar) => {
  for (let i = 0; i < dataArr.length; i += 1) {
    for (let j = 0; j < dataArr.length; j += 1) {
      if (dataArr[i] + dataArr[j] === dataVar) {
        if (dataArr[i] === dataArr[j]) {
          return [];
        }
        return [dataArr[i], dataArr[j]];
      }
    }
  }

  return [];
};

console.log(quadraticEnumeration([-1, 2, 5, 8], 7));
console.log(quadraticEnumeration([-3, -1, 0, 2, 6], 6));
console.log(quadraticEnumeration([2, 4, 5], 8));
console.log(quadraticEnumeration([-2, -1, 1, 2], 0));
console.log(quadraticEnumeration([-3, 0, 2, 4, 5], 7));
console.log(quadraticEnumeration([-7, 0, 2, 3, 6, 8, 10, 15, 18, 20], 10));
console.log(quadraticEnumeration([-7, 0, 2, 3, 6, 8, 10, 15, 18, 20], 40));
console.log("=============================\n");

console.log("\n======== Array Method ========");
const arrayMethod = (dataArr, dataVar) => {
  const arr = [];

  dataArr.find(
    (el) =>
      dataArr.includes(dataVar - el) &&
      el !== dataVar - el &&
      arr.push(el, dataVar - el)
  );

  return arr;
};

console.log(arrayMethod([-1, 2, 5, 8], 7));
console.log(arrayMethod([-3, -1, 0, 2, 6], 6));
console.log(arrayMethod([2, 4, 5], 8));
console.log(arrayMethod([-2, -1, 1, 2], 0));
console.log(arrayMethod([-3, 0, 2, 4, 5], 7));
console.log(arrayMethod([-7, 0, 2, 3, 6, 8, 10, 15, 18, 20], 10));
console.log(arrayMethod([-7, 0, 2, 3, 6, 8, 10, 15, 18, 20], 40));
console.log("=============================\n");

console.log("\n========== HashSet ==========");
const hashSet = (dataArr, dataVar) => {
  const set = [];

  for (let i = 0; i < dataArr.length; i += 1) {
    if (!set.includes(dataVar - dataArr[i])) {
      set.push(dataArr[i]);
    } else {
      return [dataVar - dataArr[i], dataArr[i]];
    }
  }

  return [];
};

console.log(hashSet([-1, 2, 5, 8], 7));
console.log(hashSet([-3, -1, 0, 2, 6], 6));
console.log(hashSet([2, 4, 5], 8));
console.log(hashSet([-2, -1, 1, 2], 0));
console.log(hashSet([-3, 0, 2, 4, 5], 7));
console.log(hashSet([-7, 0, 2, 3, 6, 8, 10, 15, 18, 20], 10));
console.log(hashSet([-7, 0, 2, 3, 6, 8, 10, 15, 18, 20], 40));
console.log("=============================\n");
