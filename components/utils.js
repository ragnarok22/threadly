import moment from "moment"

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

/*
 * Return time with the format yyyy-MM-ddThh:mm
 */
export const parseDateTime = (date) => {
  return moment(date).format('yyyy-MM-DDTHH:mm')
}