import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableActions from "./TableActions";
import TableStatus from "./TableStatus";
import { useState } from "react";
import { Checkbox } from "@mui/material";

function createDataDate(
  checker: React.ReactNode,
  date: Date,
  title: string,
  sector: string,
  company: string,
  region: string,
  action: React.ReactNode
) {
  return { checker, date, title, sector, company, region, action };
}

let date = new Date();

const rowsDate = [
  createDataDate(
    <Checkbox id={"c1"} />,
    date,
    "Ingénieur de sécurité",
    "Services",
    "Air France",
    "Nantes",
    <TableActions />
  ),
  createDataDate(
    <Checkbox id={"c2"} />,
    date,
    "Ingénieur de sécurité",
    "Services",
    "Air France",
    "Nantes",
    <TableActions />
  ),
  createDataDate(
    <Checkbox id={"c3"} />,
    date,
    "Ingénieur de sécurité",
    "Services",
    "Air France",
    "Nantes",
    <TableActions />
  ),
  createDataDate(
    <Checkbox id={"c4"} />,
    date,
    "Ingénieur de sécurité",
    "Services",
    "Air France",
    "Nantes",
    <TableActions />
  ),
  createDataDate(
    <Checkbox id={"c5"} />,
    date,
    "Ingénieur de sécurité",
    "Services",
    "Air France",
    "Nantes",
    <TableActions />
  ),
];

const tableCell = [
  <Checkbox id={"c20"} key={10} />,
  "Date d'ajout",
  "Titre du position",
  "Secteur d’activité",
  "Entreprise",
  "Région, Ville",
  "Actions",
];

interface BasicTable {
  // type: "date" | "user";
}

const BasicTable: React.FunctionComponent<BasicTable> = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableCell.map((item, index) => {
              return (
                <TableCell
                  key={index}
                  align={index === 0 ? "left" : "center"}
                  className={
                    index === 0
                      ? ""
                      : "after:absolute relative  after:left-0  after:h-7 after:w-[1px] after:bg-[#D8D8D8]"
                  }
                >
                  {/* <span
                    className={
                      index === 0 || index === tabCell.length - 1
                        ? "w-full "
                        : "border-l-[#D8D8D8] border-r border-r-[#D8D8D8] border-l w-full "
                    }
                  >
                  </span> */}
                  {item}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsDate.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.checker}</TableCell>
              <TableCell align="center">
                {row.date.toLocaleDateString()}
              </TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.company}</TableCell>
              <TableCell align="center">{row.sector}</TableCell>
              <TableCell align="center">{row.region}</TableCell>
              <TableCell align="center">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
