const dayjs = require("dayjs");
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const fromNow = (publicatedAt: number) => {
  let result = dayjs(publicatedAt).fromNow();

  result = result.replace("hours", "horas").replace("ago", "atrás");

  return result;
};

export default fromNow;
