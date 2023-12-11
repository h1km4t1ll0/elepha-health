export const formatTime = (timeInMillis: number) => {
  const totalSeconds = Math.floor(timeInMillis / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (Number.isNaN(minutes) || Number.isNaN(seconds)) return '0:00'
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
