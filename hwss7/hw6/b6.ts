class Student {
    id: number;
    name: string;
    class: string;

    constructor(id: number, name: string, className: string) {
        this.id = id;
        this.name = name;
        this.class = className;
    }
}

function filterStudentsByClass(students: Student[], targetClass: string): Student[] {
    return students.filter(student => student.class === targetClass);
}

// Khởi tạo mảng chứa các đối tượng sinh viên
const students: Student[] = [
    new Student(1, "minh", "A"),
    new Student(2, "phuc", "B"),
    new Student(3, "nam", "A"),
    new Student(4, "son", "C"),
    new Student(5, "luong", "B")
];

// Gọi hàm để lọc sinh viên theo lớp
const targetClass: string = "C";
const studentsInTargetClass: Student[] = filterStudentsByClass(students, targetClass);

// In ra các sinh viên trong lớp cần tìm
studentsInTargetClass.forEach(student => {
    console.log(`ID: ${student.id}, Name: ${student.name}, Class: ${student.class}`);
});
