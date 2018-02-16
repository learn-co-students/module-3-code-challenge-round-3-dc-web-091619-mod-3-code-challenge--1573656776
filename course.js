const Course = (function() {
  return class Course {
    constructor({ id, name, instructor, semester }) {
      this.id = id;
      this.name = name;
      this.instructor = instructor;
      this.semester = semester;
    }

    renderCourse() {
      let courseContainer = document.createElement("div");
      courseContainer.setAttribute("class", "course");
      let courseName = document.createElement("p");
      courseName.innerText = this.name;
      courseContainer.append(courseName);
      let courseInstructor = document.createElement("p");
      courseInstructor.innerText = this.instructor;
      courseContainer.append(courseInstructor);
      let courseSemester = document.createElement("p");
      courseSemester.innerText = this.semester;
      courseContainer.append(courseSemester);

      let courseButton = document.createElement("button");
      courseButton.innerText = "See Detail";
      courseContainer.append(courseButton);

      courseButton.addEventListener("click", this.handleDetailClick.bind(this));

      return courseContainer;
    }

    renderDetail() {
      // fetch course
      CourseApi.fetchCourse(this.id).then(course => {
        console.log(course);
        let courseDetail = document.getElementById("course-detail");
        courseDetail.innerHTML = "";
        let courseUl = document.createElement("ul");
        courseDetail.append(courseUl);
        course.students.forEach(s => {
          let student = new Student(s);
          courseUl.append(student.render());
          /*


          */
        });
      });

      // show students
    }

    handleDetailClick() {
      console.log("clicking", this);
      this.renderDetail();
    }
  };
})();
