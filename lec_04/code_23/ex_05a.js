// Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
// Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo, a pessoa deve
// ser maior de idade e brasileira para ser aprovada.

const people = [
  {
    name: "Paula",
    age: 26,
    gender: "female",
    occupation: "student",
    nationality: "brazilian"
  },
  {
    name: "Wagner",
    age: 15,
    gender: "male",
    occupation: "Sr. Dev",
    nationality: "brazilian"
  },
  {
    name: "Mirilaine",
    age: 50,
    gender: "female",
    occupation: "housewife",
    nationality: "brazilian"
  },
  {
    name: "Charles",
    age: 50,
    gender: "male",
    occupation: "Superintendent",
    nationality: "brazilian"
  },
  {
    name: "Jane",
    age: 44,
    gender: "female",
    occupation: "student",
    nationality: "french"
  }
];

for (const person of people) {
  if (person.age >= 18 && person.nationality === "brazilian")
    console.log(`${person.name} was APPROVED!`);
  else console.log(`${person.name} was NOT approved!`);
}
