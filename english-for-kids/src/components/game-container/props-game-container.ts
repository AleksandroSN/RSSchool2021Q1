import { FetchData } from "../../api/interfaces";

export interface PropsGameContainer {
  id: string;
  result: FetchData[];
  loading: string;
}
