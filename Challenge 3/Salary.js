
// Prompt the user to enter their basic salary and benefits


const basicSalary = parseInt(prompt("Enter your basic salary:"));
const benefits = parseInt(prompt("Enter your benefits:"));


// Define the KRA 

const kraRates = [
  { min: 0, max: 24000, rate: 0.1 },
  { min: 24000, max: 40667, rate: 0.15 },
  { min: 40667, max: 57333, rate: 0.20 },
  { min: 57333, max: 74000, rate: 0.25 },
  { min: 74000, max: 140000, rate: 0.30 },
  { min: 140000, max: 1000000000, rate: 0.35 }
];


// Define the NHIF
const nhifRates = [
  { min: 0, max: 5999, amount: 150 },
  { min: 6000, max: 7999, amount: 300 },
  { min: 8000, max: 11999, amount: 400 },
  { min: 12000, max: 14999, amount: 500 },
  { min: 15000, max: 19999, amount: 600 },
  { min: 20000, max: 24999, amount: 750 },
  { min: 25000, max: 29999, amount: 850 },
  { min: 30000, max: 34999, amount: 900 },
  { min: 35000, max: 39999, amount: 950 },
  { min: 40000, max: 44999, amount: 1000 },
  { min: 45000, max: 49999, amount: 1100 },
  { min: 50000, max: 59999, amount: 1200 },
  { min: 60000, max: 69999, amount: 1300 },
  { min: 70000, max: 79999, amount: 1400 },
  { min: 80000, max: 89999, amount: 1500 },
  { min: 90000, max: 99999, amount: 1600 },
  { min: 100000, max: 124999, amount: 1700 },

];


//  Define the NSSF
const nssfRates = [
  { min: 0, max: 6000, rate: 0.06 },
  { min: 6000, max: 18000, rate: 0.06 + 0.06 },
  { min: 18000, max: 1000000000, rate: 0.12 + 0.06 }
];


// Initialize variables for payee tax, NHIF deductions, and NSSF deductions
let payee = 0;
let nhifDeductions = 0;
let nssfDeductions = 0;

// Calculate payee tax
let taxableIncome = basicSalary + benefits - 24000; // Subtract personal relief of 24,000
if (taxableIncome > 0) {
  for (let i = 0; i < kraRates.length; i++) {
    if (taxableIncome >= kraRates[i].min && taxableIncome <= kraRates[i].max) {
    payee = (taxableIncome - kraRates[i].min) * kraRates[i].rate;
    break;
    } else if (taxableIncome > kraRates[kraRates.length - 1].max) {
    payee = (taxableIncome - kraRates[kraRates.length - 1].min) * kraRates[kraRates.length - 1].rate;
    break;
    }
    }
    }
    
    // Calculate NHIF deductions
    for (let i = 0; i < nhifRates.length; i++) {
    if (basicSalary <= nhifRates[i].max) {
    nhifDeductions = nhifRates[i].amount;
    break;
    }
    }
    
    // Calculate NSSF deductions
    for (let i = 0; i < nssfRates.length; i++) {
    if (basicSalary <= nssfRates[i].max) {
    nssfDeductions = (basicSalary * nssfRates[i].rate) + (basicSalary * 0.01);
    break;
    }
    }
    
    // Calculate gross and net salary
    const grossSalary = basicSalary + benefits;
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
    
    // Output results
  
  
    console.log(`Gross salary: ${grossSalary}`);
    console.log(`Payee (tax): ${payee}`);
    console.log(`NHIF deductions: ${nhifDeductions}`);
    console.log(`NSSF deductions: ${nssfDeductions}`);
    console.log(`Net salary: ${netSalary}`);