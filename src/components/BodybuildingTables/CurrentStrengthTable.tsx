import React from "react";
import { Table } from "semantic-ui-react";

const CurrentStrengthTable = () => (
  <div>
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Date (MM-YYYY)</Table.HeaderCell>
          <Table.HeaderCell>Bench Press 1RM (kg/lb)</Table.HeaderCell>
          <Table.HeaderCell>Deadlift 1RM (kg/lb)</Table.HeaderCell>
          <Table.HeaderCell>Squat 1RM (kg/lb)</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>08-2015</Table.Cell>
          <Table.Cell>80 / 176</Table.Cell>
          <Table.Cell>100 / 220</Table.Cell>
          <Table.Cell>140 / 308</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>08-2016</Table.Cell>
          <Table.Cell>90 / 198</Table.Cell>
          <Table.Cell>100 / 220</Table.Cell>
          <Table.Cell>130 / 286</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>08-2017</Table.Cell>
          <Table.Cell>120 / 264</Table.Cell>
          <Table.Cell>175 / 385</Table.Cell>
          <Table.Cell>100 / 220</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>08-2018</Table.Cell>
          <Table.Cell>140 / 308</Table.Cell>
          <Table.Cell>205 / 451</Table.Cell>
          <Table.Cell>100 / 220</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>08-2019</Table.Cell>
          <Table.Cell>140 / 308</Table.Cell>
          <Table.Cell>120 / 264</Table.Cell>
          <Table.Cell>100 / 220</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>06-2020</Table.Cell>
          <Table.Cell>120 / 264</Table.Cell>
          <Table.Cell>160 / 352</Table.Cell>
          <Table.Cell>100 / 220</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);

export default CurrentStrengthTable;
