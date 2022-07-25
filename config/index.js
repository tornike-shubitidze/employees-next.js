export const EMPLOYEES_URL =
  "https://test-task-api-optimo.herokuapp.com/employee";

export const JOB_URL = "https://test-task-api-optimo.herokuapp.com/job";

export const LOCATION_URL =
  "https://test-task-api-optimo.herokuapp.com/location";

export const FEEDBACK_URL =
  "https://test-task-api-optimo.herokuapp.com/feedback";

export function makeId() {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
