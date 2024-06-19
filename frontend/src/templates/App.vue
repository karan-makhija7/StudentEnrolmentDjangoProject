<template>
  <div id="app">
    <h1 id="heading"><img src="../static/images/qm.svg" alt="QM logo"  height="70"></h1>
    <h1>Enrolment List</h1>
    

    <form @submit.prevent="submitForm" novalidate>
      <div class="form-group row">
        <h2>Student Details</h2>
        <div class="row justify-content-center">
          
          <input
            type="text"
            class="form-control col-3 mx-2 mb-2"
            placeholder="First Name"
            v-model="student.first_name"
            id="name"
            required
          />
          <input
            type="text"
            class="form-control col-3 mx-2 mb-2"
            placeholder="Last Name"
            v-model="student.last_name"
            id="name"
            required
          />
        </div>
        <div class="row justify-content-center">
          <input
            type="email"
            class="form-control col-3 mx-2 mb-2"
            placeholder="Student Email"
            v-model="student.email"
            id="email"
            required
          />
        </div>
        <p></p>
        <h2>Course Details</h2>
        <div class="row justify-content-center" >
          <div class="d-flex align-items-center" id="course">
            <div class="me-2" id="title">
              <label>Course Title</label>
              <select class="form-control mt-2" v-model="student.course_title">
                <option disabled selected value="Select a course">Select a course</option>
                <option>BA</option>
                <option>BSc (Hons)</option>
                <option>MA</option>
                <option>MSc (Hons)</option>
                <option>PhD</option>
              </select>
            </div>
            <div id="title">
              <label>Course Major</label>
              <select class="form-control mt-2" v-model="student.course_major">
                <option>Architecture</option>
                <option>Anthropology</option>
                <option>Biology</option>
                <option>Business Administration</option>
                <option>Chemistry</option>
                <option>Computer Science</option>
                <option>Communication Studies</option>
                <option>Economics</option>
                <option>English Literature</option>
                <option>Environmental Science</option>
                <option>Engineering</option>
                <option>History</option>
                <option>Law</option>
                <option>Physics</option>
                <option>Political Science</option>
                <option>Psychology</option>
                <option>Mathematics</option>
                <option>Nursing</option>
                <option>History</option>
                <option>Graphic Design</option>
                <option>Sociology</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="d-flex align-items-center" id="course">
            <div id="title">
              <label>Course Minor</label>
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Course Minor"
                v-model="student.course_minor"
              />
            </div>
            &nbsp;&nbsp;
            <div class="me-2" id="title">
              <label>Course Duration</label>
              <select
                class="form-control mt-2"
                v-model="student.course_duration"
              >
                <option disabled selected value="select duration">
                  Select Course Duration (years)
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row justify-content-center" >
          <div class="d-flex align-items-center" id="course">
            <div class="me-2" id="title">
              <label>Enrolment Date &nbsp; </label>
              <input
                type="date"
                v-model="student.enrolment_date"
                id="enroldatetime"
              />
            </div>
            <div id="title">
              <label>Enrolment Time &nbsp; </label>
              <input
                type="time"
                v-model="student.enrolment_time"
                id="enroldatetime"
              />
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div>
            Enrolled
            <input
              type="checkbox"
              placeholder="Enrolled"
              v-model="student.enrolled"
              value="accepted"
              unchecked-value="not_accepted"
            />
          </div>
          <div class="col text-center">
            <button class="btn btn-success mt-3 mb-3" id="sub">Submit</button>
          </div>
        </div>
      </div>
    </form>
    <h1>Students Enrolled</h1>
    <div>(To delete the student details, click the Delete button.</div>
    <div>To update student details, click the student row and use the form to edit details.</div>
    <div>Only the students enrolled will be displayed here.)</div>
    <table class="table table-bordered">
      <thead>
        <tr id="row1">
          <th>Student ID</th>
          <th>Student Name</th>
          <th>Course Title</th>
          <th>Course Major</th>
          <th>Duration</th>
          <th>Enrolment Date</th>
          <th>Enrolment Time</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="student in students"
          :key="student.id"
          @dblclick="$data.student = student"
        >
          <td>{{ ("00000" + student.id).slice(-5) }}</td>
          <td scope="row">{{student.last_name}}, {{student.first_name}}</td>
          <td>{{student.course_title}}</td>
          <td>{{student.course_major}}</td>
          <td>{{student.course_duration}} yrs</td>
          <td>{{student.enrolment_date}}</td>
          <td>{{ (student.enrolment_time).slice(11,16) }}</td>
          <td>
            <button class="btn btn-sm-mx-1" @click="deleteStudent(student)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang ="ts" src="../static/typescript/form.ts">
</script>