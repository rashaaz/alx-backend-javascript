# 0x04. TypeScript

## Project Overview
This project covers the basics and advanced features of TypeScript, including types, interfaces, classes, functions, and working with the DOM. You will learn how to use TypeScript to create robust and scalable JavaScript applications.

### Project Timeline
- **Start Date:** June 5, 2024, 6:00 AM
- **End Date:** June 6, 2024, 6:00 AM
- **Manual QA Review:** Must be requested upon completion of the project

## Resources
- **[TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)**
- **[TypeScript documentation](https://www.typescriptlang.org/docs/)**

## Learning Objectives
By the end of this project, you should be able to explain:
- Basic types in TypeScript
- Interfaces, Classes, and functions
- How to work with the DOM and TypeScript
- Generic types
- How to use namespaces
- How to merge declarations
- How to use an ambient namespace to import an external library
- Basic nominal typing with TypeScript

## Requirements
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files should end with a new line
- All files will be transpiled on Ubuntu 18.04
- TypeScript scripts will be checked with `jest` (version 24.9.*)
- A `README.md` file at the root of the project is mandatory
- Code should use the `.ts` extension when possible
- The TypeScript compiler should not show any warnings or errors when compiling your code

## Configuration Files
- `package.json`
- `.eslintrc.js`
- `tsconfig.json`
- `webpack.config.js`

## Tasks

### Task 0: Creating an Interface for a Student
**Directory:** `task_0`
**Files:** `task_0/js/main.ts`, `task_0/package.json`, `task_0/.eslintrc.js`, `task_0/tsconfig.json`, `task_0/webpack.config.js`

**Instructions:**
1. Copy the provided configuration files into the `task_0` directory.
2. Write an interface named `Student` that includes `firstName` (string), `lastName` (string), `age` (number), and `location` (string).
3. Create two students and an array `studentsList` containing these students.
4. Use Vanilla JavaScript to render a table and append a new row for each student in the array.
5. Each row should contain the student's first name and location.

### Task 1: Let's Build a Teacher Interface
**Directory:** `task_1`
**Files:** `task_1/js/main.ts`, `task_1/webpack.config.js`, `task_1/tsconfig.json`, `task_1/package.json`

**Instructions:**
1. Copy the configuration files into the `task_1` directory.
2. Write an interface named `Teacher` with the following properties:
   - `firstName` (string)
   - `lastName` (string)
   - `fullTimeEmployee` (boolean)
   - `yearsOfExperience` (number, optional)
   - `location` (string)
   - Allow any additional attribute like `contract` (boolean)

### Task 2: Extending the Teacher Class
**Directory:** `task_1`
**File:** `task_1/js/main.ts`

**Instructions:**
1. Write an interface named `Directors` that extends `Teacher` and includes `numberOfReports` (number).

### Task 3: Printing Teachers
**Directory:** `task_1`
**File:** `task_1/js/main.ts`

**Instructions:**
1. Write a function `printTeacher` that accepts `firstName` and `lastName` as arguments and returns the first letter of `firstName` and the full `lastName`.
2. Write an interface for the function named `printTeacherFunction`.

### Task 4: Writing a Class
**Directory:** `task_1`
**File:** `task_1/js/main.ts`

**Instructions:**
1. Write a class named `StudentClass`:
   - Constructor accepts `firstName` and `lastName` (strings).
   - Method `workOnHomework` returns the string "Currently working".
   - Method `displayName` returns the `firstName`.
2. Describe the constructor and class through interfaces.

### Task 5: Advanced Types Part 1
**Directory:** `task_2`
**Files:** `task_2/js/main.ts`, `task_2/webpack.config.js`, `task_2/tsconfig.json`, `task_2/package.json`

**Instructions:**
1. Create `DirectorInterface` and `TeacherInterface` with specific methods.
2. Implement classes `Director` and `Teacher` that follow these interfaces.
3. Create a function `createEmployee` that returns either a `Director` or a `Teacher` based on the salary.

### Task 6: Creating Functions Specific to Employees
**Directory:** `task_2`
**File:** `task_2/js/main.ts`

**Instructions:**
1. Write a function `isDirector` to check if an employee is a director.
2. Write a function `executeWork` that calls the appropriate work method based on the employee type.

### Task 7: String Literal Types
**Directory:** `task_2`
**File:** `task_2/js/main.ts`

**Instructions:**
1. Write a string literal type `Subjects` allowing values "Math" or "History".
2. Write a function `teachClass` that returns a specific string based on the subject.

### Task 8: Ambient Namespaces
**Directory:** `task_3`
**Files:** `task_3/js/main.ts`, `task_3/js/interface.ts`, `task_3/js/crud.d.ts`

**Instructions:**
1. Create a type `RowID` and set it to `number`.
2. Create an interface `RowElement` with `firstName` (string), `lastName` (string), and optional `age` (number).
3. Use the `crud.js` library to perform database operations.
4. Write an ambient file `crud.d.ts` with type declarations.
5. Import and use these types and functions in `main.ts`.

### Task 9: Namespace & Declaration Merging
**Directory:** `task_4`
**Files:** `task_4/js/subjects/Cpp.ts`, `task_4/js/subjects/Java.ts`, `task_4/js/subjects/React.ts`, `task_4/js/subjects/Subject.ts`, `task_4/js/subjects/Teacher.ts`

**Instructions:**
1. Define a `Teacher` interface in a namespace `Subjects`.
2. Create a `Subject` class with a `teacher` attribute and a `setTeacher` method.
3. Extend the `Teacher` interface with optional attributes and create classes for `Cpp`, `Java`, and `React` subjects, each with specific methods.

### Task 10: Update `task_4/js/main.ts`
**Directory:** `task_4`
**File:** `task_4/js/main.ts`

**Instructions:**
1. Export constants for `Cpp`, `Java`, and `React` subjects.
2. Export a `Teacher` object `cTeacher` with `experienceTeachingC = 10`.
3. Log the subject names and call the methods for requirements and available teachers.

### Task 11: Brand Convention & Nominal Typing
**Directory:** `task_5`
**Files:** `task_5/js/main.ts`, `task_5/package.json`, `task_5/webpack.config.js`, `task_5/tsconfig.json`

**Instructions:**
1. Create interfaces `MajorCredits` and `MinorCredits` with a `credits` property.
2. Add a `brand` property to each interface.
3. Write functions `sumMajorCredits` and `sumMinorCredits` to sum the credits of two subjects.

## Repository
- **GitHub repository:** `alx-backend-javascript`
- **Directory:** `0x04-TypeScript`

