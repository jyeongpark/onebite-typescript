/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "홍길동",
  age: 20,
  position: "developer",
  work() {
    console.log("일함");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  // Employee클래스 상속
  // 필드
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officerNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officerNumber;
  }
}

const employeeB = new Employee("홍길동", 20, "개발자");
console.log(employeeB);
employeeB.work();

const employeeC: Employee = {
  // 구조적 타입 시스템 따름
  name: "",
  age: 20,
  position: "",
  work() {},
};
