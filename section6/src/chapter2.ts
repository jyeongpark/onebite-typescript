/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
  // 필드
  public name: string;
  private age: number; // 해당 클래스 내부에서만 접근 가능
  protected position: string; // 파생클래스까지 접근 가능

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

  func() {
    // this.age = age;
    console.log(`${this.position}`);
  }
}

const employee = new Employee("홍길동", 20, "developer");
employee.name = "김길동"; // public 인스턴스의 프로퍼티에 접근 가능
// employee.age = age;
console.log(employee);
