const CourseApi = (function() {
  return class {
    static fetchCourses() {
      return fetch("http://localhost:3000/users/1/courses").then(res =>
        res.json()
      );
    }

    static fetchCourse(id) {
      return fetch(`http://localhost:3000/users/1/courses/${id}`).then(res =>
        res.json()
      );
    }

    static editStudent(id, obj) {
      return fetch(`http://localhost:3000/users/1/courses${id}`).then(res => {
        res.json();
      });
    }
  };
})();
