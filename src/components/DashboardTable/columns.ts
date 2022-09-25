import moment from "moment";
import { TableColumn } from "../../types/TableColumn";
const columns = [
  { id: "fullName", label: "Name" },
  {
    id: "birthYear",
    label: "Birth Year",
    align: "left",
    format: (value: string) => {
      const age = moment().diff(value, "years");
      const date = moment(new Date(value)).format("YYYY-MM-DD");
      return `${date} (${age} age)`;
    },
  },
  {
    id: "position",
    label: "Postion",
    align: "left",
  },
  {
    id: "salary",
    label: "Salary",
    align: "left",
    format: (value) => `${Number(value).toFixed(2)}$`,
  },
] as TableColumn[];

export default columns;
