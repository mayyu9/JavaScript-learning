// in this example, we fetch the data from from the url, that data is passed to the reduce function, which will filter out the data from json object and return
// star war character and his films urls.
//

// https://medium.freecodecamp.org/a-practical-guide-to-fetch-reduce-and-formatting-data-from-an-external-api-283ddd9bfdcb

const cityJobsData = fetch('https://swapi.co/api/people/');
cityJobsData
  .then(data => data.json())
  .then(data => {
    const agencyFrequency = data.results.reduce((agencies, value) => {
      //console.log("agencies: "+JSON.stringify(agencies) +"\n "+ "values: "+ JSON.stringify(value.skin_color));
      agencies[value.name] = value.films;
      //agencies["birth_year"] = value.birth_year;
      return agencies;
    }, {});
    console.log(agencyFrequency);
  })
  .catch(err => console.log(err));
