const $display = document.getElementById('dispay'),
$btn = document.querySelectorAll('.btn');
console.log('$btn', $btn)
let calculation = []
let accumalate;
function calculate(btn) {
let value = btn.innerText;
if(value === 'AC'){
    calculation = []; //
    $display.value = '';//
} else if (btn.value === '&lrr'){//
       calculation.pop()//
    $display.value = calculation.join('')//
} else if (value === '='){//
 $display.value = eval(accumalate)//
} else if (value ==='%'){//
    $display.value = parseFloat(calculation.join(''))/100//
    calculation = [];//
    } else {//
        calculation.push(value)//
        accumalate = calculation.join('');//
    $display.value = accumalate;
}
}



$btn.forEach(button => button/addEventListener('click', ()=>calculate(button)))