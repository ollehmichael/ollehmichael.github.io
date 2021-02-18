import React from "react";
import { Button } from "semantic-ui-react";
import { NavLink, Switch, Route } from "react-router-dom";
import { useSmartTroubleShootingPageHooks } from "./smart-troubleshooting-page-hooks";
// import { ErrorLogCapture } from "./components/ErrorLogCapture/ErrorLogCapture-page";
// import { SmartONMManual } from "./components/SmartONMManual/SmartONMManual-page";
// import { SearchEquipmentHistoricalRecord } from "./components/SearchEquipmentHistoricalRecord/SearchEquipmentHistoricalRecord";

const AdminPanelPage = () => {
  useSmartTroubleShootingPageHooks();
  return (
    <Switch>
      <Route path="/smart-troubleshooting" exact>
        <OptionsPage />
      </Route>
      {/* <Route path="/smart-troubleshooting/ai-smart-troubleshooting" exact>
        <AISmartTroubleShootingPage />
      </Route> */}
      <Route path="/admin-panel/error-logs" exact>
        {/* <ErrorLogsPage /> */}
      </Route>
      <Route path="/admin-panel/equipment-info-record-database" exact>
        {/* <EquipmentInfoRecordPage /> */}
      </Route>
      <Route path="/admin-panel/equipment-health-record-history-database" exact>
        {/* <EquipmentHealthRecordHistoryPage /> */}
      </Route>
    </Switch>
  );
};

const OptionsPage = () => {
  return (
    <div
      style={{
        paddingTop: "3%",
      }}
    >
      {/* <Row>
        <div
          style={{
            fontSize: "5vh",
            fontWeight: "bold",
            marginTop: "2vh",
            marginBottom: "7vh",
            fontFamily: "Lato",
          }}
        >
          Smart Troubleshooting Menu
        </div>
        <Button
          as={NavLink}
          to="/smart-troubleshooting/ai-smart-troubleshooting"
          content="AI Smart Troubleshooting"
          style={{
            fontSize: "2vmin",
            // padding: "10vh",
            verticalAlign: "middle",
            textAlign: "center",
            marginBottom: "1vh",
            marginRight: "3vh",
            width: "20vw",
            height: "30vh",
            lineHeight: "3vmin",
            boxShadow: "5px 5px #a9a9a9",
          }}
        />
        <Button
          as={NavLink}
          to="/smart-troubleshooting/error-log-capture"
          content="Error Log Capture"
          style={{
            fontSize: "2vmin",
            // padding: "10vh",
            verticalAlign: "middle",
            textAlign: "center",
            marginBottom: "1vh",
            marginRight: "3vh",
            width: "20vw",
            height: "30vh",
            lineHeight: "3vmin",
            boxShadow: "5px 5px #a9a9a9",
          }}
        />
        <Button
          as={NavLink}
          to="/smart-troubleshooting/smart-om-manual"
          content="Smart O&M Manual"
          style={{
            fontSize: "2vmin",
            // padding: "10vh",
            verticalAlign: "middle",
            textAlign: "center",
            marginBottom: "1vh",
            marginRight: "3vh",
            width: "20vw",
            height: "30vh",
            lineHeight: "3vmin",
            boxShadow: "5px 5px #a9a9a9",
          }}
        />
        <Button
          as={NavLink}
          to="/smart-troubleshooting/search-equipment-historical-record"
          content="Search Equipment Historical Record"
          style={{
            fontSize: "2vmin",
            // padding: "10vh",
            verticalAlign: "middle",
            textAlign: "center",
            marginBottom: "1vh",
            marginRight: "3vh",
            width: "20vw",
            height: "30vh",
            lineHeight: "3vmin",
            boxShadow: "5px 5px #a9a9a9",
          }}
        />
      </Row> */}
    </div>
  );
};

export default AdminPanelPage;
