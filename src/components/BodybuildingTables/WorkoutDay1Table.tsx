import React from "react";
import { Table } from "semantic-ui-react";

const WorkoutDay1Table = () => (
  <div>
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Exercise Number</Table.HeaderCell>
          <Table.HeaderCell>Exercise</Table.HeaderCell>
          <Table.HeaderCell>Set</Table.HeaderCell>
          <Table.HeaderCell>Reps</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Warm Up</Table.Cell>
          <Table.Cell>1A</Table.Cell>
          <Table.Cell>BB Jerks</Table.Cell>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>30</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Warm Up</Table.Cell>
          <Table.Cell>1B</Table.Cell>
          <Table.Cell>Band/Machine Flyes</Table.Cell>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>30</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Main</Table.Cell>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>BB Press</Table.Cell>
          <Table.Cell>6</Table.Cell>
          <Table.Cell>15, 12, 10, 10</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Main</Table.Cell>
          <Table.Cell>3</Table.Cell>
          <Table.Cell>Inclined BB Press</Table.Cell>
          <Table.Cell>5</Table.Cell>
          <Table.Cell>12</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Main</Table.Cell>
          <Table.Cell>4A</Table.Cell>
          <Table.Cell>Inclined DB Press</Table.Cell>
          <Table.Cell>4</Table.Cell>
          <Table.Cell>10, 10, 10</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Main</Table.Cell>
          <Table.Cell>4B</Table.Cell>
          <Table.Cell>Inclined DB Flyes</Table.Cell>
          <Table.Cell>4</Table.Cell>
          <Table.Cell>15, 15, 15</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Main</Table.Cell>
          <Table.Cell>5A</Table.Cell>
          <Table.Cell>Chest Dips</Table.Cell>
          <Table.Cell>5</Table.Cell>
          <Table.Cell>10</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Main</Table.Cell>
          <Table.Cell>5B</Table.Cell>
          <Table.Cell>DB Arnold Press</Table.Cell>
          <Table.Cell>5</Table.Cell>
          <Table.Cell>10</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Main</Table.Cell>
          <Table.Cell>6A</Table.Cell>
          <Table.Cell>Leg Extensions</Table.Cell>
          <Table.Cell>6</Table.Cell>
          <Table.Cell>15</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Main</Table.Cell>
          <Table.Cell>6B</Table.Cell>
          <Table.Cell>Hyperextensions</Table.Cell>
          <Table.Cell>6</Table.Cell>
          <Table.Cell>10</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);

export default WorkoutDay1Table;
