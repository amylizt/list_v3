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
          var select = document.createElement('select');
          question.options.forEach(option => {
            var optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.text = option.text;
            select.appendChild(optionElement);
          });
          form.appendChild(select);
        } else if (question.type === 'text') {
          var input = document.createElement('input');
          input.type = 'text';
          input.placeholder = question.placeholder;
          form.appendChild(input);
        }
      });
      
      // Create a submit

     var submitButton = document.createElement('input');
      submitButton.type = 'submit';
      submitButton.value = 'Submit';
      form.appendChild(submitButton);
      
      // Add an event listener to the submit button
      submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        
  // Create a div to contain the data
  var dataBox = document.createElement('div');
  dataBox.className = 'data-box';
  document.body.appendChild(dataBox);
  
  // Loop through the questions and inputs
  data.questions.forEach((question, index) => {
    var inputs = document.querySelectorAll('input, select');
    var input = inputs[index];
    if (input.type === 'select') {
      var p = document.createElement('p');
      p.textContent = question.text + ': ' + input.options[input.selectedIndex].value;
       dataBox.appendChild(p);
    } 
      else if (input.type === question.type) {
      var p = document.createElement('p');
      p.textContent = question.text + ': ' + input.value;
      dataBox.appendChild(p);
    }
  });
});
      
      document.body.appendChild(form);
    });
}

createForm()