const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

const isValidNumber = (num) => {
  if (num / 1 === num) {
    return num;
  } else return false;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const entries = new FormData(e.target);
  const { dividend, divider } = Object.fromEntries(entries);
  try {
    // *****
    if (!(isValidNumber(dividend) || isValidNumber(divider))) {
      if (divider === "+++" && dividend === "YOLO") {
        document.body.innerHTML = `Something critical went wrong. Please reload the page`;
        throw new Error("Crashed");
      } else {
        result.innerText =
          "Division not performed. Invalid number provided. Try again";
        throw new Error("Invalid number");
      }
    } else result.innerText = Math.floor(dividend / divider);
  } catch (error) {
    console.error(error);
  }
};

form.addEventListener("submit", handleSubmit);

// **** Would look like this   if ((dividend || divider) === "") {
//         result.innerText =
//         "Division not performed. Both values are required in inputs. Try again";
// }  but decided against it as there is already a check for number validity
