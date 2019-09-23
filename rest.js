/*function asdjkl() {
    document.getElementById("car").innerHTML = "Working";
}

document.addEventListener('DOMContentLoaded', function() {
    var car = document.getElementById("car");
    car.addEventListener('click', function() {
        asdjkl();
    });
});*/

var content = document.getElementById("container");
var calculator = document.getElementById("calc");
var button2 = document.getElementById("show-more");
var button3 = document.getElementById("car");
var button1 = document.getElementById("a");
var calcback = document.getElementById("calc-back");
var convert = document.getElementById("convert");
var convback = document.getElementById("conv-back");

button1.onclick = function() {
    if(calculator.className == "" && convert.className != "on") {
        calculator.className = "on";
    }
};

button2.onclick = function() {
    if(content.className == "open") {
        //shrink the box
        content.className = "";
        button2.innerHTML = "Show More";
    }
    else {
        //expand the box
        content.className = "open";
        button2.innerHTML = "Show Less";
    }
};

button3.onclick = function() {
    if(convert.className == "" && calculator.className != "on") {
        convert.className = "on";
    }
};

calcback.onclick = function() {
    if(calculator.className == "on") {
        calculator.className = "";
    }
};

convback.onclick = function() {
    if(convert.className == "on") {
        convert.className = "";
    }
};


function getHistory() {
    return document.getElementById("history-value").innerText;
}
function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}
function getOutput() {
    return document.getElementById("output-value").innerText;
}
function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerText = num;
    }
    else {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
    
}
function getFormattedNumber(num) {
    if (num == "-") {
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        }
        else if (this.id == "backspace") {
            var output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        } 
        else {
            var output = getOutput();
            var history = getHistory();
            if (output == "" && history != "") {
                if (isNan(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output != "" || history != "") {
                output = output == ""? 
                output:reverseNumberFormat(output);
                history = history + output;
                if (this.id == "=") {
                    //var result = eval(history);
                    printOutput(result); 
                    printHistory("");
                }
                else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    })
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function() {
        var output = reverseNumberFormat(getOutput());
        if (output != NaN) {
            output = output + this.id;
            printOutput(output);
        }
    })
}