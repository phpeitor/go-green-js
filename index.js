import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";
const TOTAL_COMMITS = 100;

const startDate = moment("2026-01-03");
const endDate = moment("2026-04-30");
const daysDiff = endDate.diff(startDate, "days");
const datesTable = [];
const fullRangeDates = [];

const styles = {
  reset: "\x1b[0m",
  cyan: "\x1b[36m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
};

const buildFullRange = () => {
  const cursor = startDate.clone();
  while (cursor.isSameOrBefore(endDate, "day")) {
    fullRangeDates.push(cursor.format());
    cursor.add(1, "day");
  }
};

const renderProgress = (completed, lastDate) => {
  const width = 24;
  const percent = Math.floor((completed / TOTAL_COMMITS) * 100);
  const filled = Math.floor((completed / TOTAL_COMMITS) * width);
  const bar = `${"#".repeat(filled)}${"-".repeat(width - filled)}`;
  process.stdout.write(
    `\r${styles.cyan}[${bar}] ${percent}%${styles.reset} ${styles.yellow}${completed}/${TOTAL_COMMITS}${styles.reset} ultimo=${lastDate}`
  );

  if (completed === TOTAL_COMMITS) {
    process.stdout.write("\n");
  }
};

const printHeader = () => {
  console.log(`${styles.green}Go Green JS - Generador de commits${styles.reset}`);
  console.log(`Rango: ${startDate.format("YYYY-MM-DD")} -> ${endDate.format("YYYY-MM-DD")}`);
  console.log(`Dias en rango: ${daysDiff + 1}`);
  console.log(`Commits a generar: ${TOTAL_COMMITS}`);
  console.log("");
};

const createPayload = () => ({
  generatedAt: moment().format(),
  range: {
    start: startDate.format(),
    end: endDate.format(),
    totalDays: fullRangeDates.length,
    dates: fullRangeDates,
  },
  commits: datesTable.map((entry) => ({
    commit: entry.Commit,
    date: entry.Fecha,
  })),
});

const makeCommits = (n) => {
  if (n === 0) {
    console.log("");
    console.log(`${styles.green}Resumen de commits generados:${styles.reset}`);
    console.table(datesTable);
    return simpleGit().push();
  }
  
  const randomDays = random.int(0, daysDiff);
  const date = startDate.clone().add(randomDays, "d").format();

  datesTable.push({ "Commit": TOTAL_COMMITS - n + 1, "Fecha": date });
  renderProgress(datesTable.length, date);

  jsonfile.writeFile(path, createPayload(), (error) => {
    if (error) {
      console.error("No se pudo escribir data.json", error);
      return;
    }

    simpleGit()
      .add([path])
      .commit(date, { "--date": date }, makeCommits.bind(this, --n));
  });
  
};

buildFullRange();
printHeader();
makeCommits(TOTAL_COMMITS);