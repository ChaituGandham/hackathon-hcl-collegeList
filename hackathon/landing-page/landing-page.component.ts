import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../common-service';

@Component({
  selector: 'app-test-component',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly studentService: StudentService
  ) {}

  // Declarations
  mainListOfLocations = [
    {
      cityName: 'Hyderabad',
      isToggleExpanded: false,
      listOfColleges: [
        {
          collegeName: 'Chaitanya Bharathi Institute of Technologies',
          isChecked: false,
          collegeEmail: 'chaitanyaBharathi@gmail.com',
          contactNumber: 7888989899,
          viewMore: 'View More',
          isViewMoreClicked: false,
          rating: 3.6
        },
        {
          collegeName: 'Mallareddy University',
          isChecked: false,
          collegeEmail: 'mallareddy@gmail.com',
          contactNumber: 7687796969,
          viewMore: 'View More',
          isViewMoreClicked: false,
          rating: 3.5
        }
      ]
    },
    {
      cityName: 'Bengaluru',
      isToggleExpanded: false,
      listOfColleges: [
        {
          collegeName: 'BMS College of Engineering',
          isChecked: false,
          collegeEmail: 'bms@gmail.com',
          contactNumber: 667658888,
          viewMore: 'View More',
          isViewMoreClicked: false,
          rating: 3.2
        },
        {
          collegeName: 'IIIT Bangalore',
          isChecked: false,
          collegeEmail: 'iitBangalore@gmail.com',
          contactNumber: 7687796969,
          viewMore: 'View More',
          isViewMoreClicked: false,
          rating: 3.9
        }
      ]
    },
    {
      cityName: 'Chennai',
      isToggleExpanded: false,
      listOfColleges: [
        {
          collegeName: 'SRM University',
          isChecked: false,
          collegeEmail: 'srm@gmail.com',
          contactNumber: 687656757,
          viewMore: 'View More',
          isViewMoreClicked: false
        },
        {
          collegeName: 'Amrutha University',
          isChecked: false,
          collegeEmail: 'amrutha@gmail.com',
          contactNumber: 87897987,
          viewMore: 'View More',
          isViewMoreClicked: false
        }
      ]
    }
  ];

  ngOnInit() {}

  toggle(item) {
    item.isToggleExpanded = !item.isToggleExpanded;
  }

  onCheckBoxClick(college) {
    college.isChecked = true;
  }

  onSubmit() {
    console.log('mainListOfLocations', this.mainListOfLocations);
    this.studentService.setSelectedColleges(this.mainListOfLocations);
    this.router.navigate(['/candidate-details']);
  }

  onViewMoreClick(college) {
    college.isViewMoreClicked = !college.isViewMoreClicked;
  }
}
