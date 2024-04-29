export const getMonthYear = (date: string) => {
  if (date != '') {
    const month = new Date(date).getMonth();
    const year = new Date(date).getFullYear();
    return `${getMonthText(month)} ${year}`;
  } else {
    return 'Present';
  }
};

export const getMonthText = (num: number) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return months[num];
};
