const display = document.querySelector(".display");
const buttons = document.querySelectorAll('.buttons');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
const eqaul = document.querySelector('.equal');

// display input/output
for (const btns of buttons) {
    btns.onclick = () => {
        display.textContent += btns.textContent;
    };
}
// clear display
clear.onclick = () => {
    display.textContent = "";
};

// Backspace
del.onclick = () => {
    display.textContent = display.textContent.slice(0, -1);
};

// Evaluate
eqaul.onclick = () => {
    display.textContent = eval(display.textContent);
};

// percentage

eqaul.onclick = ()=> {
    if(display.textContent.includes('%')){
		const result = eval(display.textContent.replace('%', '') + '/100');
		display.textContent = result;
	}
    else{
		display.textContent = eval(display.textContent);
	}
};