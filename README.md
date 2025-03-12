# Quadratic Equation Solver

This is a console application written in TypeScript that solves quadratic equations of the form:

```
ax² + bx + c = 0
```

where `a`, `b`, and `c` are real numbers, and `a ≠ 0`. The application supports two modes of operation: interactive and non-interactive (file-based).

## Features
- **Interactive Mode:** The user is prompted to input the coefficients `a`, `b`, and `c` manually. The program then calculates and displays the roots of the equation.
- **Non-Interactive Mode:** The program reads the coefficients from a specified file and outputs the roots of the equation.

## Prerequisites
Before running the application, ensure you have the following installed:
- **Node.js** (v16 or higher recommended)
- **npm** (comes with Node.js)
- **TypeScript** (optional, for type checking)

## How to Build and Run the Project

### 1. Clone the Repository
```sh
git clone https://github.com/RandomIv/quadratic-equation-solver.git
cd quadratic-equation-solver
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Run the Application
The project uses **TSX** to run TypeScript files directly without compilation.

#### Interactive Mode
Run the application without any arguments:
```sh
npx tsx src/index.ts
```

#### Non-Interactive Mode
Run the application with a file path as an argument:
```sh
npx tsx src/index.ts input.txt
```
Replace `input.txt` with the path to your input file.

### File Format for Non-Interactive Mode
The input file must contain exactly three space-separated numbers (a, b, c) representing the coefficients of the quadratic equation. Example:
```txt
1 0 0
```
This represents the equation:
```
1x² + 0x + 0 = 0
```

## Example Usage

### Interactive Mode
```sh
$ npx tsx src/index.ts
```
```
a = 2
b = 1
c = -3
Equation is: (2.0) x^2 + (1.0) x + (-3.0) = 0
There are 2 roots
x1 = -1.5
x2 = 1.0
```

### Non-Interactive Mode
```sh
$ npx tsx src/index.ts input.txt
```
```
Equation is: (1.0) x^2 + (0.0) x + (0.0) = 0
There are 1 roots
x1 = 0
```

### Revert commit
https://github.com/RandomIv/quadratic-equation-solver/commit/bc3075322bcf08db288254595ffd845de03b3935

Explanation: revert commit was done because there was better promisification possible.
