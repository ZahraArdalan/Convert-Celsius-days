const data1 = [15, 45, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]} celsius...${data1[1]}
 celsius...${data1[2]} celsius...`);
const printforecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + ` ${arr[i]} celsius in ${i + 1} days`;
  }
  console.log(str);
};
printforecast(data1);
