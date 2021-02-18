import React from "react";
import { Accordion, Image } from "semantic-ui-react";
import CurrentPhysique from "./BodybuildingTables/CurrentPhysiqueTable";
import CurrentStrength from "./BodybuildingTables/CurrentStrengthTable";
// import CurrentDiet from "./BodybuildingTables/CurrentDietTable";
import WorkoutDay1Table from "./BodybuildingTables/WorkoutDay1Table";
// import WorkoutDay2Table from "./BodybuildingTables/WorkoutDay2Table";
// import WorkoutDay3Table from "./BodybuildingTables/WorkoutDay3Table";
// import WorkoutDay4Table from "./BodybuildingTables/WorkoutDay4Table";
// import WorkoutDay5Table from "./BodybuildingTables/WorkoutDay5Table";
// import WorkoutDay6Table from "./BodybuildingTables/WorkoutDay6Table";
import DietExample from "../assets/Diet_Example.png";

const workoutPanels = [
  {
    key: "workout-day-1",
    title: "Day 1 - Chest, Delts, Legs",
    content: {
      content: (
        <div>
          <WorkoutDay1Table />
        </div>
      ),
    },
  },
  {
    key: "workout-day-2",
    title: "Day 2 - Back, Biceps",
    content: {
      content: <div>{/* <WorkoutDay2Table /> */}</div>,
    },
  },
  {
    key: "workout-day-3",
    title: "Day 3 - Biceps, Triceps, Delts",
    content: {
      content: <div>{/* <WorkoutDay3Table /> */}</div>,
    },
  },
  {
    key: "workout-day-4",
    title: "Day 4 - Chest, Delts, Legs",
    content: {
      content: <div>{/* <WorkoutDay4Table /> */}</div>,
    },
  },
  {
    key: "workout-day-5",
    title: "Day 5 - Back, Biceps",
    content: {
      content: <div>{/* <WorkoutDay5Table /> */}</div>,
    },
  },
  {
    key: "workout-day-6",
    title: "Day 6 - Biceps, Triceps, Delts",
    content: {
      content: <div>{/* <WorkoutDay6Table /> */}</div>,
    },
  },
];

const panels = [
  {
    key: "current-physique",
    title: "Current Physique",
    content: {
      content: (
        <div>
          {"Height (cm/ft) : 183cm / 6'0ft"}
          <br />
          <CurrentPhysique />
          <br />
          <CurrentStrength />
        </div>
      ),
    },
  },
  {
    key: "current-workout",
    title: "Current Workout (3-Day Split)",
    content: {
      content: (
        <div>
          <Accordion.Accordion panels={workoutPanels} exclusive={false} fluid />
        </div>
      ),
    },
  },
  {
    key: "current-diet",
    title: "Current Diet",
    content: {
      content: (
        <div>
          <Image src={DietExample} />
        </div>
      ),
    },
  },
];

const BodybuildingDropdown = () => {
  return (
    <div>
      <Accordion panels={panels} exclusive={true} fluid />
    </div>
  );
};

export default BodybuildingDropdown;
