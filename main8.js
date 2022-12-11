function createForm() {
  fetch('question1.json')
    .then(res => res.json())
    .then(data => {
      var form = document.createElement('form');
      data.questions.forEach(question => {
        var p = document.createElement('p');
        p.textContent = question.text;
        form.appendChild(p);
        if (question.type === 'dropdown') {
          createDropdown(question, form);
        } else if (question.type === 'text') {
          createInput(question, form);
        }
      });
      createSubmitButton(form);
      document.body.appendChild(form);
    });
}


function createDropdown(question, form) {
  var select = document.createElement('select');
  question.options.forEach(option => {
    var optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.text = option.text;
    select.appendChild(optionElement);
    form.appendChild(select);
});
}


//Function 3
function createInput(question, form) {
  var input = document.createElement('input');
  input.type = 'text';
  input.placeholder = question.placeholder;
  form.appendChild(input);
}

//Function 4
function createSubmitButton(form) {
  var submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.value = 'Submit';
  form.appendChild(submitButton);
  submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    createDataBox();
  });
}

//Function 5
function createDataBox() {
  var dataBox = document.createElement('div');
  dataBox.className = 'data-box';
  document.body.appendChild(dataBox);
  fetch('question1.json')
    .then(res => res.json())
    .then(data => {
      data.questions.forEach((question, index) => {
        var inputs = document.querySelectorAll('input, select');
        var input = inputs[index];
        if (input.type === 'input') {
          var p = document.createElement('p');
          p.textContent = question.text + ': ' + input.options[input.selectedIndex].value;
          dataBox.appendChild(p);
        } else if (input.type === question.type) {
          var p = document.createElement('p');
          p.textContent = question.text + ': ' + input.value;
          dataBox.appendChild(p);
        }
      });
    });
}

createForm();