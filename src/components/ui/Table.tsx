import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableActions from "../tables/TableActions";
import CheckBox from "./CheckBox";

function createData(
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

const rows = [
  createData(
    <CheckBox id={"c1"} />,
    date,
    "Ingénieur de sécurité",
    "Services",
    "Air France",
    "Nantes",
    <TableActions />
  ),
  createData(
    <CheckBox id={"c2"} />,
    date,
    "Ingénieur de sécurité",
    "Services",
    "Air France",
    "Nantes",
    <TableActions />
  ),
  createData(
    <CheckBox id={"c3"} />,
    date,
    "Ingénieur de sécurité",
    "Services",
    "Air France",
    "Nantes",
    <TableActions />
  ),
  createData(
    <CheckBox id={"c4"} />,
    date,
    "Ingénieur de sécurité",
    "Services",
    "Air France",
    "Nantes",
    <TableActions />
  ),
  createData(
    <CheckBox id={"c5"} />,
    date,
    "Ingénieur de sécurité",
    "Services",
    "Air France",
    "Nantes",
    <TableActions />
  ),
];

const tabCell = [
  "checker",
  "Date d'ajout",
  "Titre du position",
  "Secteur d’activité",
  "Entreprise",
  "Région, Ville",
  "Actions",
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tabCell.map((item, index) => {
              return (
                <TableCell key={index} align="center">
                  {item}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.checker}</TableCell>
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
}
