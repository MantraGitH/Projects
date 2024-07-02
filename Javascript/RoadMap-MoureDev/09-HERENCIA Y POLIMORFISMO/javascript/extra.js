/* * DIFICULTAD EXTRA (opcional):
 * Implementa la jerarquía de una empresa de desarrollo formada por Empleados que
 * pueden ser Gerentes, Gerentes de Proyectos o Programadores.
 * Cada empleado tiene un identificador y un nombre.
 * Dependiendo de su labor, tienen propiedades y funciones exclusivas de su
 * actividad, y almacenan los empleados a su cargo. */

class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.employees = [];
  }
  add(employee) {
    this.employees.push(employee);
  }
  printEmployees() {
    this.employees.forEach((employee) => {
      console.log(employee.name);
    });
  }
}

class Manager extends Employee {
  CoordinateProjects() {
    console.log(
      `${this.name} está coordinando con todos los proyectos de la empresa`
    );
  }
}

class ProjectManager extends Employee {
  constructor(id, name, project) {
    super(id, name);
    this.project = project;
  }

  CoordinateProject() {
    console.log(`${this.name} está coordinando su proyecto`);
  }
}

class Programer extends Employee {
  constructor(id, name, language) {
    super(id, name);
    this.language = language;
  }
  code() {
    console.log(`${this.name} está programando en ${this.language}`);
  }
  add(employee) {
    console.log(
      `Un programador no tiene empleados a su cargo. ${employee.name} no se añadirá.`
    );
  }
}

let myManager = new Manager(1, "Camilo");
let myProjectManager = new ProjectManager(2, "Kevin Feige", "Proyecto 1");
let myProjectManager2 = new ProjectManager(3, "Kathleen Kennedy", "Proyecto 2");
let myProgramer = new Programer(4, "Linus Torvalds", "Linux");
let myProgramer2 = new Programer(5, "James Gosling", "Java");
let myProgramer3 = new Programer(6, "Guido van Rossum", "Python");
let myProgramer4 = new Programer(7, "Dennis Ritchie", "C");

myManager.add(myProjectManager);
myManager.add(myProjectManager2);

myProjectManager.add(myProgramer);
myProjectManager.add(myProgramer2);
myProjectManager2.add(myProgramer3);
myProjectManager2.add(myProgramer4);

myProgramer.add(myProgramer2);

myProgramer.code();
myProjectManager.CoordinateProject();
myManager.CoordinateProjects();
myManager.printEmployees();
myProjectManager.printEmployees();
myProgramer.printEmployees(); // No imprimirá nada ya que no tiene empleados
