interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}
console.log(printTeacher("John", "Doe"));

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const myPrintTeacher: printTeacherFunction = printTeacher;
console.log(myPrintTeacher("John", "Doe"));

interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomeWork(): string;
  displayName(): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomeWork(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const StudentClassConstructor: StudentConstructor = StudentClass;

const student: StudentInterface = new StudentClassConstructor('John', 'Doe');
console.log(student.workOnHomeWork());
console.log(student.displayName());
