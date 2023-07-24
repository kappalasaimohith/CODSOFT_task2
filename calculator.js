document.addEventListener('keydown', function(event) {
  handleKeyPress(event.key);
});

function handleKeyPress(key) {
  switch (key) {
    case '0':
      append('0');
      break;
    case '1':
      append('1');
      break;
    case '2':
      append('2');
      break;
    case '3':
      append('3');
      break;
    case '4':
      append('4');
      break;
    case '5':
      append('5');
      break;
    case '6':
      append('6');
      break;
    case '7':
      append('7');
      break;
    case '8':
      append('8');
      break;
    case '9':
      append('9');
      break;
    case '.':
      append('.');
      break;
    case '+':
      append('+');
      break;
    case '-':
      append('-');
      break;
    case '*':
      append('*');
      break;
    case '/':
      append('/');
      break;
    case '%':
      append('%');
      break;
    case 'Enter':
      calculateResult();
      break;
    case 'Backspace':
      clearResult();
      break;
  }
}

function append(value) {
  document.getElementById('result').value += value;
}

function clearResult() {
  document.getElementById('result').value = '';
}

function calculateResult() {
  var result = document.getElementById('result').value;
  try {
    var calculatedResult = eval(result);
    document.getElementById('result').value = calculatedResult;
  } catch (error) {
    document.getElementById('result').value = "Error";
  }
}


