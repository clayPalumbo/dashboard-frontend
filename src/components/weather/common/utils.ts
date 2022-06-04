export const getSunset = (hour: number): string => {
  return hour > 7 && hour < 20 ? "day" : "night";
};

export const getTimeOfDay = (hour: number): string => {
  if (hour === 12) return "pm";
  if (hour < 12) {
    return "AM";
  } else {
    return "PM";
  }
};

export const getUvColor = (uv: number) => {
  if (uv < 5) return "green";
  else if (uv < 8) return "orange";
  else return "red";
};
