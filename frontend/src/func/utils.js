function enToPersianNumber(number) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return number.toString().replace(/\d/g, (digit) => persianDigits[digit]);
}

function formatNumberWithSeparators(value) {
  let formattedValue = "";
  for (let i = 0; i < value.length; i++) {
    if (i > 0 && i % 3 === 0) {
      formattedValue = "," + formattedValue;
    }
    formattedValue = value[value.length - i - 1] + formattedValue;
  }

  return formattedValue;
}

function convertPersianToEnglishNumbers(persianNum) {
  const persianToEnglishMap = {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
  };
  return persianNum.replace(/[۰-۹]/g, (match) => persianToEnglishMap[match]);
}

function shuffled(array) {
  //قاطی کردن محتوای ارایه
  return array.sort(() => Math.random() - 0.5);
}

export {
  enToPersianNumber,
  formatNumberWithSeparators,
  convertPersianToEnglishNumbers,
  shuffled
};
