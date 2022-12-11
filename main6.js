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
      document.body.appendChild(form);
    });
}

    createForm()