const Student = (function() {
  return class Student {
    constructor({ id, name, class_year, percentage }) {
      this.id = id;
      this.name = name;
      this.class_year = class_year;
      this.percentage = percentage;
    }

    render() {
      let studentLi = document.createElement("li");

      studentLi.addEventListener("click", this.showEditForm.bind(this));

      studentLi.innerHTML = `${this.name} <span id="student-${this.id}">${
        this.percentage
      }</span>`;

      return studentLi;
    }

    showEditForm() {
      let studentFormContainer = document.getElementById("student-form");
      studentFormContainer.innerHTML = "";

      studentFormContainer.innerHTML = `<div><p>${this.name}</p><p>${
        this.class_year
      }</p><p id="student-edit-percentage">${this.percentage}</p></div>`;
      let studentForm = document.createElement("form");
      let inputLabel = document.createElement("label");
      inputLabel.innerText = "Percentage";
      studentForm.append(inputLabel);
      let inputPercentForm = document.createElement("input");
      inputPercentForm.setAttribute("type", "text");
      inputPercentForm.setAttribute("value", this.percentage);
      inputPercentForm.id = "input-percentage";
      studentForm.append(inputPercentForm);
      let inputSubmit = document.createElement("input");

      inputSubmit.setAttribute("type", "submit");
      inputSubmit.setAttribute("value", "Edit");
      studentForm.append(inputSubmit);

      studentForm.addEventListener("submit", event => {
        event.preventDefault();
        let editForm = document.getElementById("input-percentage");
        let studentEditPercent = document.getElementById(
          "student-edit-percentage"
        );
        studentEditPercent.innerText = editForm.value;
        let studentDetailPercent = document.getElementById(
          `student-${this.id}`
        );
        studentDetailPercent.innerText = editForm.value;

        // CourseApi.editStudent()
      });

      studentFormContainer.append(studentForm);
    }
  };
})();
