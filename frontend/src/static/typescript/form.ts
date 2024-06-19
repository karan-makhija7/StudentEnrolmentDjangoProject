import { defineComponent } from 'vue';

// interface Student declares the attributes of the Student object
interface Student {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  course_title: string;
  course_major: string;
  course_minor: string;
  course_duration: number;
  enrolled: boolean;
  enrolment_date: string;  
  enrolment_time: string;  
}

const HOST_URL = "http://localhost:8000/api/";

export default defineComponent({
  name: 'App',
  data() {
    return {
      student: {} as Student,
      students: [] as Student[],
    };
  },
  async created() {
    await this.getStudents();
  },
  methods: {
    async getStudents() {
      const response = await fetch(`${HOST_URL}students/`);
      this.students = await response.json();
      return this.students
    },

    // Method to check if email already exists in the Students Database
    async checkEmailExists(email: string){
      var studentsArray = await this.getStudents();
      var check = studentsArray.filter((student : Student)=> student.email==email);
      return check.length > 0;
    },


    async submitForm() {
      var emailExists = await this.checkEmailExists(this.student.email);
      
      if (this.student.id === undefined) {
        if (emailExists){
          alert("Email already exists!")
          return
        }
        this.createStudent();
      } else {
        this.editStudent();
      }
    },
    
    async createStudent() {
      await this.getStudents();
      await fetch(`${HOST_URL}students/`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.student),
      });
      await this.getStudents();
    },

    // Update student details
    async editStudent() {
      await this.getStudents();
      await fetch(`${HOST_URL}students/${this.student.id}/`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.student),
      });
      await this.getStudents();
      this.student = {} as Student;
    },

    // Delete a student object
    async deleteStudent(student: Student) {
      await this.getStudents();
      await fetch(`${HOST_URL}students/${student.id}/`, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      await this.getStudents();
    },
  },
});
