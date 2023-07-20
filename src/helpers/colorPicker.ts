type ColorType = {
  [value: string]: string;
};

const colors: ColorType = {
  typescript: "#3178C6",
  html: "#E34C26",
  javascript: "#F1E05A",
  handlebars: "#F7931E",
  css: "#563D7C",
};

function colorPicker(language: string): string {
  console.log(language);

  language = language.toLowerCase();
  return colors[language];
}

export default colorPicker;
