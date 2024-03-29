let poorCountry=['Bangladesh','Sirilonka'];
let richCountry=['America','Canada','Italy'];
richCountry.push(poorCountry);

console.log(richCountry);

//output [ 'America', 'Canada', 'Italy', [ 'Bangladesh', 'Sirilonka' ] ]