function calculateElapsedTime(startDate) {
  const units = {
    year: { singular: "year", plural: "years" },
    month: { singular: "month", plural: "months" },
    day: { singular: "day", plural: "days" },
    hour: { singular: "hour", plural: "hours" },
    minute: { singular: "minute", plural: "minutes" },
  };

  const now = new Date();
  const diffInMilliseconds = now - new Date(startDate);

  if (isNaN(diffInMilliseconds)) {
    return "no response yet";
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30.44; // Approximation for average days per month
  const year = day * 365.25; // Approximation for a non-leap year

  const diffInYears = Math.floor(diffInMilliseconds / year);
  if (diffInYears > 0) {
    return `${diffInYears} ${
      diffInYears === 1 ? units.year.singular : units.year.plural
    } ago`;
  }

  const diffInMonths = Math.floor(diffInMilliseconds / month);
  if (diffInMonths > 0) {
    return `${diffInMonths} ${
      diffInMonths === 1 ? units.month.singular : units.month.plural
    } ago`;
  }

  const diffInDays = Math.floor(diffInMilliseconds / day);
  if (diffInDays > 0) {
    return `${diffInDays} ${
      diffInDays === 1 ? units.day.singular : units.day.plural
    } ago`;
  }

  const diffInHours = Math.floor(diffInMilliseconds / hour);
  if (diffInHours > 0) {
    return `${diffInHours} ${
      diffInHours === 1 ? units.hour.singular : units.hour.plural
    } ago`;
  }

  const diffInMinutes = Math.floor(diffInMilliseconds / minute);
  if (diffInMinutes === 0) {
    return `right now`;
  } else {
    return `${diffInMinutes} ${
      diffInMinutes === 1 ? units.minute.singular : units.minute.plural
    } ago`;
  }
}

export default calculateElapsedTime;
