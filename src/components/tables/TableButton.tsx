import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableActions from "./TableActions";
import TableStatus from "./TableStatus";
import { Checkbox } from "../ui/CheckBox";

function createDataUser(
  checker: React.ReactNode,
  status: React.ReactNode,
  name: string,
  type: string,
  numberCommand: number,
  numberProduct: number,
  action: React.ReactNode
) {
  return { checker, status, name, type, numberCommand, numberProduct, action };
}

const rowsUser = [
  createDataUser(
    <Checkbox id={"c1"} />,
    <TableStatus type="pending">pending</TableStatus>,
    "Guendouz Mehdi",
    "Entreprise",
    30,
    12,
    <TableActions />
  ),
  createDataUser(
    <Checkbox id={"c1"} />,
    <TableStatus type="delete">delete</TableStatus>,
    "Guendouz Mehdi",
    "Entreprise",
    30,
    12,
    <TableActions />
  ),
  createDataUser(
    <Checkbox id={"c1"} />,
    <TableStatus type="payer">payer</TableStatus>,
    "Guendouz Mehdi",
    "Entreprise",
    30,
    12,
    <TableActions />
  ),
  createDataUser(
    <Checkbox id={"c1"} />,
    <TableStatus type="delete">delete</TableStatus>,
    "Guendouz Mehdi",
    "Entreprise",
    30,
    12,
    <TableActions />
  ),
  createDataUser(
    <Checkbox id={"c1"} />,
    <TableStatus type="payer">payer</TableStatus>,
    "Guendouz Mehdi",
    "Entreprise",
    30,
    12,
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

interface BasicTableButton {
  // type: "date" | "user";
}

const BasicTableButton: React.FunctionComponent<BasicTableButton> = (props) => {
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
                  {item}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsUser.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.checker}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.numberCommand}</TableCell>
              <TableCell align="center">{row.numberProduct}</TableCell>
              <TableCell align="center">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTableButton;
