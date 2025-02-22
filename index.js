import fs from "fs";

import { DrugFactory } from "./src/factories/DrugFactory";
import { Pharmacy } from "./src/models/pharmacy";

const log = [];
const drugs = [
  DrugFactory.createDrug("Doliprane", 20, 30),
  DrugFactory.createDrug("Herbal Tea", 10, 5),
  DrugFactory.createDrug("Fervex", 12, 35),
  DrugFactory.createDrug("Magic Pill", 15, 40),
  DrugFactory.createDrug("Dafalgan", 20, 30),
];
const pharmacy = new Pharmacy(drugs);

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.parse(JSON.stringify(pharmacy.updateBenefitValue())));
}

fs.writeFile(
  "output.json",
  JSON.stringify({ result: log }, null, 2).concat("\n"),
  (err) => {
    if (err) {
      console.log("error");
    } else {
      console.log("success");
    }
  },
);
