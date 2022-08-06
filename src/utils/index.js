export const last = (array) => array?.[array.length - 1];

export const first = (array) => array?.[0];

export const getDurationLabel = (key, val) => {
  const map = {
    year: {
      1: "سنة",
      2: "سنتان",
      default: val + " سنوات",
    },
    month: {
      1: "شهر",
      2: "شهران",
      default: val + " شهور",
    },
    day: {
      1: "يوم",
      2: "يومان",
      default: val + " أيام",
    },
    hour: {
      1: "ساعة",
      2: "ساعتان",
      default: val + " ساعات",
    },
    minute: {
      1: "دقيقة",
      2: "دقيقتان",
      default: val + " دقائق",
    },
    second: {
      1: "ثانية",
      2: "ثانيتان",
      default: val + " ثواني",
    },
  };
  return map[key][val] || map[key].default;
};
