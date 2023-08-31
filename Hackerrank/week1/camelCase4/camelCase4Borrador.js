const input1 = "S;M;plasticCup()";
const input2 = "S;C;LargeSoftwareBook";
const input3 = "S;V;pictureFrame ";

const input4 = "C;M;white sheet of paper";
const input5 = "C;C;coffee machine";
const input6 = "C;V;mobile phone";

//TODO: Clean function for HK
function processData(input) {
  //Enter your code here
  let spiltSemi = input.split("\r\n");

  spiltSemi.forEach((res) => {
    let value = res.split(";");
    let data = value[2];

    if (value[0] == "S") {
      if (value[1] === "M") {
        let str = "";
        for (let i = 0; i < data.length; i++) {
          if (
            data[i] === data[i].toUpperCase() &&
            !["(", ")"].includes(data[i])
          )
            str += " " + data[i].toLowerCase();
          else if (!["(", ")"].includes(data[i])) str += data[i];
        }
        console.log(str);
      } else if (["C", "V"].includes(value[1])) {
        let str = "";
        for (let i = 0; i < data.length; i++) {
          if (data[i] === data[i].toUpperCase()) {
            str += " " + data[i].toLowerCase();
          } else {
            str += data[i];
          }
        }
        console.log(str.trimStart());
      }
    } else if (value[0] == "C") {
      if (["M", "V"].includes(value[1])) {
        let str = "";
        for (let i = 0; i < data.length; i++) {
          if (data[i - 1] === " ") {
            str += data[i].toUpperCase();
          } else if (data[i] !== " ") {
            str += data[i];
          }
        }
        console.log(value[1] == "M" ? str + "()" : str);
      } else if (["C"].includes(value[1])) {
        let str = data[0].toUpperCase();
        for (let i = 1; i < data.length; i++) {
          if (data[i - 1] === " ") {
            str += data[i].toUpperCase();
          } else if (data[i] !== " ") {
            str += data[i];
          }
        }
        console.log(str.trimStart());
      }
    }
  });
}

processData(input1);
processData(input2);
processData(input3);
processData(input4);
processData(input5);
processData(input6);
