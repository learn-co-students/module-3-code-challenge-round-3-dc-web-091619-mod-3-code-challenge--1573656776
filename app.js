const App = (function() {
  return class {
    static init() {
      let courseContainer = document.getElementById("course-container");
      let courseUl = document.createElement("ul");
      courseContainer.append(courseUl);

      CourseApi.fetchCourses().then(courses => {
        courses.forEach(c => {
          let course = new Course(c);
          courseUl.append(course.renderCourse());
        });
      });
    }
  };
})();
