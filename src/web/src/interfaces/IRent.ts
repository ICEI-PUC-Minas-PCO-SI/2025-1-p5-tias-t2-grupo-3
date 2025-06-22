export interface IRent {
  id: number;
  client_id: number;
  dumpster_id: number;
  residue_id: number;
  rent_date: Date;
  delivery_date: Date;
  status_id: number;
  created_by_user: number;
  updated_by_user: number;
}