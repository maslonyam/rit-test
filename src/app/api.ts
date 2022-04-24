import { Planet } from "./planet";

export interface PlanetsApiType {
  count: number,
  next: string,
  previous: string | null,
  results: Planet[]
}