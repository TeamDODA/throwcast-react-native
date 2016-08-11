export const withLeadingZero = function withLeadingZero(amount) {
  return amount < 10 ? `0${amount}` : `${amount}`;
};

export const formattedTime = function formattedTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds - (minutes * 60);
  const error = isNaN(minutes) || isNaN(seconds);
  return error ? '' : (`${withLeadingZero(minutes)}:${withLeadingZero(seconds.toFixed(0))}`);
};
