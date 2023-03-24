export const padTo2Digits = (num) => {
    return num.toString().padStart(2, "0");
  };

  export const ConvertHoursToMins = (totalMinutes) => {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return `${padTo2Digits(hours)}h${padTo2Digits(minutes)}m`;
  };