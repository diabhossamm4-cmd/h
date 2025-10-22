export const formatDateWithHour = (date: string) => {
  const [year, month, day] = date?.split('-');
  const [hour, minute] = day?.split('T')[1].split(':');
  return (
    year + '/' + month + '/' + day?.split('T')[0] + ' ' + hour + ':' + minute
  );
};

export const formatDate = (date: string) => {
  const parsedDate = new Date(date);
  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short',
  })
    .format(parsedDate)
    .split(' ');
};
