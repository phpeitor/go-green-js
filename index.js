import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";

const startDate = moment("2019-02-01");
const endDate = moment("2019-07-30");
const daysDiff = endDate.diff(startDate, "days");
const datesTable = [];

const makeCommits = (n) => {
  if (n === 0) {
    console.table(datesTable);
    return simpleGit().push();
  }
  
  const randomDays = random.int(0, daysDiff);
  const date = startDate.clone().add(randomDays, "d").format();
  
  const data = {
    date: date,
  };
  
  console.log(date);
  datesTable.push({ "Commit": 100 - n + 1, "Fecha": date });

  jsonfile.writeFile(path, data, () => {
    simpleGit()
      .add([path])
      .commit(date, { "--date": date }, makeCommits.bind(this, --n));
  });
  
};

makeCommits(100);