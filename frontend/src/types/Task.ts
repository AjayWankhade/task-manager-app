export interface Task {
  id: string;
  title: string;
  description: string;
  status: "To_Do" | "In_Progress" | "Done";
}
