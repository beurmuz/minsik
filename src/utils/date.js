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

export const convertDday = (ddays) => {
  const base = new Date("2015-08-07");
  const today = new Date(base);
  today.setDate(base.getDate() + ddays);

  let years = today.getFullYear() - base.getFullYear();
  let months = today.getMonth() - base.getMonth();
  let days = today.getDate() - base.getDate();

  if (days < 0) {
    months -= 1;
    const prevM = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevM.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
};
