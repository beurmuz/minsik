export const getYear = () => {
  const today = new Date();
  return today.getFullYear();
};

export const dday = () => {
  const today = new Date();
  const debutDay = new Date("2015-08-07");
  let diff = Math.floor((today - debutDay) / (1000 * 60 * 60 * 24) + 1);
  return diff;
};
