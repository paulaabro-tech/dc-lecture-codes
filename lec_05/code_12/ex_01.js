const people = [
  { name: "Rodolfo", vip: true },
  { name: "Maria", vip: false },
  { name: "Jon", vip: true },
  { name: "Bea", vip: true },
  { name: "Carl", vip: false },
  { name: "Anna", vip: true },
  { name: "June", vip: false }
];

const sector = isVip => (isVip ? "Black" : "Green");
const updatedPeople = people.map(person => ({ ...person, sector: sector(person.vip) }));
console.log(updatedPeople);
