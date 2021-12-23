import moment from "moment";

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

/*
 * Return time with the format yyyy-MM-ddThh:mm
 */
export const parseDateTime = (date) => {
  return moment(date).format("yyyy-MM-DDTHH:mm");
};

export const splitTextInTweets = (fullText) => {
  console.log(fullText)
  const text = fullText.map((text) => {
    if (text === undefined) {
      return "\n";
    } else {
      return text.join("") + '\n';
    }
  });
  const procesed = text.join('').split("\n\n\n");
  const temp = [];
  for (let i = 0; i < procesed.length; i++) {
    temp.push(procesed[i]);
  }
  return temp;
};

export const checkTweets = (tweets) => {
  // check if tweets are ok with length
};
