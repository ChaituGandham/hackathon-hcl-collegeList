import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../common-service';

@Component({
  selector: 'app-candidate-application',
  templateUrl: './candidate-application.component.html',
  styleUrls: ['./candidate-application.component.scss']
})

export class CandidateApplicationComponent implements OnInit {

  constructor(
    private readonly fb: FormBuilder,
    private readonly studentService: StudentService
  ) {}

  // Declarations..
  candidateForm: FormGroup;
  selectedCollegeList: Array<any>;
  isSubmittedSuccessfully = false;

  ngOnInit() {
    this.candidateFormGroup();
    this.studentService.listOfColleges.subscribe((ele) => {
      this.selectedCollegeList = ele;
    });
  }

  candidateFormGroup() {
    this.candidateForm = this.fb.group({
      candidateName: new FormControl(''),
      gender: new FormControl(''),
      age: new FormControl(''),
      marks: new FormControl(''),
      percentage: new FormControl(''),
      email: new FormControl(''),
      selectedCourse: new FormControl(''),
      selectedColleges: new FormControl(''),
      selectedLocations: new FormControl(''),
      id: new FormControl('')
    });
  }

  onSubmit(form) {
    const selectedCollegeNames = [];
    const selectedLocations = [];
    const refNo = [];
    this.selectedCollegeList.forEach(ele => {
      const selectedCollges = ele.listOfColleges.filter(item => item.isChecked === true);
      if (selectedCollges.length > 0) {
        selectedCollges.forEach((element, i) => {
          selectedCollegeNames.push(element.collegeName);
          refNo.push(ele.cityName.slice(0, 3) + i);
        });
        selectedLocations.push(ele.cityName);
        form.get('id').setValue(refNo);
      }
    });
    form.get('selectedColleges').setValue(selectedCollegeNames);
    form.get('selectedLocations').setValue(selectedLocations);
    this.isSubmittedSuccessfully = true;
    setTimeout(() => {
      this.isSubmittedSuccessfully = false;
    }, 5000);
  }
}
