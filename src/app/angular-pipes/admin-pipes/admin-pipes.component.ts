import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { StudentService } from '../Services/student.service';
import { Student } from '../Models/Student';
import { resolve } from '../../angular-router-and-route-guards/auth.guard';

@Component({
  selector: 'app-admin-pipes',
  templateUrl: './admin-pipes.component.html',
  styleUrl: './admin-pipes.component.css'
})
export class AdminPipesComponent implements OnInit {
  studentService: StudentService = inject(StudentService);

  isEditing: boolean = false;
  isInserting: boolean = false;
  stdIdToEdit: number;

  students: Student[];
  totalMarks: number;

  filterText: string = 'All';

  totalStudents = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.students.length);
    }, 2000);
  }).then();

  //PROPERTIES FOR INSERTING
  @ViewChild('name') Name: ElementRef;
  @ViewChild('gender') Gender: ElementRef;
  @ViewChild('dob') Dob: ElementRef;
  @ViewChild('course') Course: ElementRef;
  @ViewChild('marks') Marks: ElementRef;
  @ViewChild('fee') Fee: ElementRef;

  //PROPERTIES FOR EDITING
  @ViewChild('editName') editName: ElementRef;
  @ViewChild('editGender') editGender: ElementRef;
  @ViewChild('editDob') editDob: ElementRef;
  @ViewChild('editCourse') editCourse: ElementRef;
  @ViewChild('editMarks') editMarks: ElementRef;
  @ViewChild('editFee') editFee: ElementRef;

  ngOnInit() {
    //this.students = this.studentService.students;
    this.students = this.studentService.filterStudentByGender(this.filterText);
    this.totalMarks = this.studentService.totalMarks;
  }

  onFilterChanged(event: any) {
    //console.log(event.target.value);
    let filterBy = event.target.value;
    this.filterText = filterBy;
    this.students = this.studentService.filterStudentByGender(filterBy);
  }

  OnInsertClicked() {
    this.isInserting = true;
  }
  OnInsertCancelled() {
    this.isInserting = false;
  }
  OnInsertSaved() {
    this.studentService.CreateStudent(
      this.Name.nativeElement.value,
      this.Gender.nativeElement.value,
      this.Dob.nativeElement.value,
      this.Course.nativeElement.value,
      this.Marks.nativeElement.value,
      this.Fee.nativeElement.value
    );
    //this.students = this.studentService.students; // pointing to the new reference
    this.students = this.studentService.filterStudentByGender(this.filterText);
    this.isInserting = false;
  }

  OnEditClicked(stdId: number) {
    this.isEditing = true;
    this.stdIdToEdit = stdId;
  }
  OnEditCancelled() {
    this.isEditing = false;
  }

  OnEditSaved(student: Student) {
    student.name = this.editName.nativeElement.value;
    student.gender = this.editGender.nativeElement.value;
    student.dob = this.editDob.nativeElement.value;
    student.course = this.editCourse.nativeElement.value;
    student.marks = this.editMarks.nativeElement.value;
    student.fee = this.editFee.nativeElement.value;

    this.students = this.studentService.filterStudentByGender(this.filterText);

    this.isEditing = false;
  }
}
