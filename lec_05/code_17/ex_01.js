const companies = [
  { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn: 1938 },
  { name: "Microsoft", marketValue: 415, CEO: "Satya Natella", foundedOn: 1975 },
  { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
  { name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", foundedOn: 2004 },
  { name: "spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006 },
  { name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOn: 1976 }
];

const totalEditCompanies = companies
  .map(company => ({ ...company, marketValue: company.marketValue * 1.1 }))
  .filter(({ foundedOn }) => foundedOn < 2000)
  .reduce((acc, { marketValue }) => acc + marketValue, 0);
console.log(totalEditCompanies.toFixed(2));
