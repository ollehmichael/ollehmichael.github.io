import React from "react";
import { Table } from "semantic-ui-react";

const CurrentPhysiqueTable = () => (
  <div>
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Date (MM-YYYY)</Table.HeaderCell>
          <Table.HeaderCell>Weight (kg/lb)</Table.HeaderCell>
          <Table.HeaderCell>BodyFat Percentage (%)</Table.HeaderCell>
          <Table.HeaderCell>Body Mass Index (kg/lb)</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>08-2015</Table.Cell>
          <Table.Cell>80 / 176</Table.Cell>
          <Table.Cell>13</Table.Cell>
          <Table.Cell>37 / 81.4</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>08-2016</Table.Cell>
          <Table.Cell>90 / 198</Table.Cell>
          <Table.Cell>15</Table.Cell>
          <Table.Cell>39 / 85.8</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>08-2017</Table.Cell>
          <Table.Cell>93 / 204.6</Table.Cell>
          <Table.Cell>10</Table.Cell>
          <Table.Cell>43 / 94.6</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>08-2018</Table.Cell>
          <Table.Cell>115 / 253</Table.Cell>
          <Table.Cell>19</Table.Cell>
          <Table.Cell>47 / 103.4</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>06-2020</Table.Cell>
          <Table.Cell>93 / 204.6</Table.Cell>
          <Table.Cell>13</Table.Cell>
          <Table.Cell>45 / 99</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);

export default CurrentPhysiqueTable;
