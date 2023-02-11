export function fDate(date: number) {
  const dateFormat = new Date(date);
  let month = '';
  let day = '';
  if (dateFormat.getMonth() < 10) {
    month = `0${dateFormat.getMonth() + 1}`;
  } else month = `${dateFormat.getMonth() + 1}`;

  if (dateFormat.getDate() < 10) {
    day = `0${dateFormat.getDate()}`;
  } else day = `${dateFormat.getDate()}`;
  return day + '/' + month + '/' + dateFormat.getFullYear();
}

export function fDateReverse(date: number) {
  const dateFormat = new Date(date);
  let month = '';
  let day = '';
  if (dateFormat.getMonth() < 10) {
    month = `0${dateFormat.getMonth() + 1}`;
  } else month = `${dateFormat.getMonth() + 1}`;

  if (dateFormat.getDate() < 10) {
    day = `0${dateFormat.getDate()}`;
  } else day = `${dateFormat.getDate()}`;

  return dateFormat.getFullYear() + '-' + month + '-' + day;
}
