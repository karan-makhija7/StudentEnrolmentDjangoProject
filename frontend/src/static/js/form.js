export default {
    name: 'App',
    data() {
      return {
        student: {},
        students: [],
      };
    },
    async created() {
      await this.getStudents();
    },
    methods: {
      submitForm() {
        if (this.student.id === undefined) {
          this.createStudent();
        } else {
          this.editStudent();
        }
      },
      async getStudents() {
        var response = await fetch('http://localhost:8000/api/students/');
        this.students = await response.json();
      },
      async createStudent() {
        await this.getStudents();
        await fetch('http://localhost:8000/api/students/', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.student),
        });
        await this.getStudents();
      },
      async editStudent() {
        await this.getStudents();
        await fetch(`http://localhost:8000/api/students/${this.student.id}/`, {
          method: 'put',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.student),
        });
        await this.getStudents();
        this.student = {};
      },
      async deleteStudent(student) {
        await this.getStudents();
        await fetch(`http://localhost:8000/api/students/${student.id}/`, {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.student),
        });
        await this.getStudents();
      },
    },
  };