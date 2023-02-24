/**
 * @description Generates a random numeric code with the specified number of characters
 * @export
 * @param {number} [numberOfCharacters=4]
 * @return {*}  {string}
 */
export function generateNumericCode(numberOfCharacters: number = 4): string {
  // If numberOfCharacters is less than 1, return an empty string
  if (numberOfCharacters < 1) return "";

  // If numberOfCharacters is greater than 16, split the numberOfCharacters into groups of 16
  if (numberOfCharacters > 16) {
    const groups = Math.ceil(numberOfCharacters / 16);
    const groupNumberOfCharacters = Math.ceil(numberOfCharacters / groups);
    const codes = [];
    for (let i = 0; i < groups; i++) {
      codes.push(generateNumericCode(groupNumberOfCharacters));
    }
    return codes.join("");
  }

  // Generate a random number with the specified number of numberOfCharacters
  return Math.floor(Math.random() * 10 ** numberOfCharacters)
    .toString()
    .padStart(numberOfCharacters, "0");
}

/**
 * @description Generates a random alphanumeric code with the specified number of characters and letter case
 * @export
 * @param {number} [numberOfCharacters=4]
 * @param {("lower" | "upper" | "mixed")} [letterCase="mixed"]
 * @return {*}  {string}
 */
export function generateAlphanumericCode(
  numberOfCharacters: number = 4,
  letterCase: "lower" | "upper" | "mixed" = "mixed"
): string {
  // If numberOfCharacters is less than 1, return an empty string
  if (numberOfCharacters < 1) return "";

  // If numberOfCharacters is greater than 16, split the numberOfCharacters into groups of 16
  if (numberOfCharacters > 16) {
    const groups = Math.ceil(numberOfCharacters / 16);
    const groupNumberOfCharacters = Math.ceil(numberOfCharacters / groups);
    const codes = [];
    for (let i = 0; i < groups; i++) {
      codes.push(generateAlphanumericCode(groupNumberOfCharacters, letterCase));
    }
    return codes.join("");
  }

  // Generate a random string with the specified number of numberOfCharacters
  const code = Math.random()
    .toString(36)
    .slice(2, 2 + numberOfCharacters);

  // If letterCase is "lower", return the code in lowercase
  if (letterCase === "lower") return code;

  // If letterCase is "upper", return the code in uppercase
  if (letterCase === "upper") return code.toUpperCase();

  // If letterCase is "mixed", return the code with a random case
  return code
    .split("")
    .map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char))
    .join("");
}
