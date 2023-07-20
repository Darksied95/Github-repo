function dateConverter(date: Date) {
  const currentDate = new Date();
  const passedDate = new Date(date);
  const MILLISECOND_IN_A_WEEK = 604800000;
  console.log();
  if (passedDate.getFullYear() !== currentDate.getFullYear()) {
    let [, month, date, year] = passedDate.toString().split(" ");
    return `${month} ${date}, ${year}`;
  } else if (currentDate.getMonth() - passedDate.getMonth() > 1) {
    let [, month, date] = passedDate.toString().split(" ");
    return `${month} ${date}`;
  } else if (currentDate.getMonth() - passedDate.getMonth() === 1) {
    return "last month";
  } else if (
    (currentDate.getTime() - passedDate.getTime()) / MILLISECOND_IN_A_WEEK >=
    1
  ) {
    const week = Math.floor(currentDate.getTime() - passedDate.getTime());
    return week === 1 ? "last week" : `${week} weeks ago`;
  } else if (currentDate.getDay() - passedDate.getDay() >= 1) {
    let day = currentDate.getDay() - passedDate.getDay();
    return day === 1 ? "A day ago" : `${day} days ago`;
  }
  return "";
}