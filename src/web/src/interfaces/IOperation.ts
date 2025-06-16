export interface IOperation {
  id: number;
  rent_id: number;
  driver_name: string;
  operation_type: string;
  date: Date;
  location: string;
  destination: string;
  comments: string;
   status_id: number;
  created_by_user: number;
  updated_by_user: number;
}