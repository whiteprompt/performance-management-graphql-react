module.exports = {
  classes: [
    { id: 1, name: 'Computer Science 1', teacher_id: 1 },
    { id: 2, name: 'Computer Science 2', teacher_id: 2},
    { id: 3, name: 'Algorithms and Data Structures', teacher_id: 3 },
    { id: 4, name: 'Programming Languages 1', teacher_id: 1 },
    { id: 5, name: 'Programming Languages 2', teacher_id: 2 },
  ],
  teachers: [
    { id: 1, name: 'Martin Fowler' },
    { id: 2, name: 'Neal Ford' },
    { id: 3, name: 'Mark Richards' }
  ],
  students: [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" }
  ],
  enrollments: [
    { id: 1, class_id: 1, student_id: 1, date: new Date('2022-01-03'), active: true },
    { id: 2, class_id: 2, student_id: 1, date: new Date('2022-01-10'), active: true },
    { id: 3, class_id: 3, student_id: 1, date: new Date('2022-01-11'), active: false },
    { id: 4, class_id: 4, student_id: 2, date: new Date('2022-01-12'), active: false },
    { id: 5, class_id: 5, student_id: 2, date: new Date('2022-01-19'), active: true },
  ],
  exams: [
    { id: 1, enrollment_id: 1, score: 100 },
    { id: 2, enrollment_id: 2, score: 75 },
    { id: 3, enrollment_id: 5, score: 20 },
  ]
}
