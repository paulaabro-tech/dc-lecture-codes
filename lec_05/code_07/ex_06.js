// A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando
// dados sobre o salário e número de filhos. A prefeitura deseja saber:
// - média do salário da população;
// - média do número de filhos;
// - maior salário;
// - O final da leitura de dados se dará com a entrada de um salário negativo.
// - Faça isso usando uma função!

function displayData(pop) {
  let sumSalary = 0;
  let sumChildren = 0;
  let largestSalary = -1;
  let i;
  for (i = 0; i < pop.length; i++) {
    const salary = pop[i].salary;
    if (salary < 0) break;
    if (salary > largestSalary) largestSalary = salary;
    sumSalary += salary;
    sumChildren += pop[i].numChildren;
  }
  if (largestSalary === -1) console.log("No available data");
  else {
    const avgSalary = sumSalary / i;
    const avgChildren = sumChildren / i;
    console.log(`Average salary: $ ${avgSalary.toFixed(2)}`);
    console.log(`Average number of children ${avgChildren.toFixed(1)}`);
    console.log(`Max salary: $ ${largestSalary.toFixed(2)}`);
  }
}

const population = [
  { salary: 70000, numChildren: 5 },
  { salary: 100000, numChildren: 3 },
  { salary: 60000, numChildren: 0 },
  { salary: 50000, numChildren: 1 },
  { salary: 40000, numChildren: 2 },
  { salary: 230000, numChildren: 3 },
  { salary: 150000, numChildren: 10 },
  { salary: -70000, numChildren: 3 },
  { salary: 70000, numChildren: 7 },
  { salary: 70000, numChildren: 0 },
  { salary: 70000, numChildren: 1 }
];

displayData(population);
