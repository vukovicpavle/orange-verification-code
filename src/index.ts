/**
 * @description Generates a random numeric code with the specified number of characters
 * @export
 * @param {number} [length=4]
 * @return {*}  {string}
 */
export function generateNumericCode(length: number = 4): string {
  // If length is less than 1, return an empty string
  if (length < 1) return "";

  // If length is greater than 16, split the length into groups of 16
  if (length > 16) {
    const groups = Math.ceil(length / 16);
    const groupLength = Math.ceil(length / groups);
    const codes = [];
    for (let i = 0; i < groups; i++) {
      codes.push(generateNumericCode(groupLength));
    }
    return codes.join("");
  }

  // Generate a random number with the specified number of length
  return Math.floor(Math.random() * 10 ** length)
    .toString()
    .padStart(length, "0");
}

/**
 * @description Generates a random alphanumeric code with the specified number of characters and letter case
 * @export
 * @param {number} [length=4]
 * @param {("lower" | "upper" | "mixed")} [letterCase="mixed"]
 * @return {*}  {string}
 */
export function generateAlphanumericCode(
  length: number = 4,
  letterCase: "lower" | "upper" | "mixed" = "mixed"
): string {
  // If length is less than 1, return an empty string
  if (length < 1) return "";

  // If length is greater than 16, split the length into groups of 16
  if (length > 16) {
    const groups = Math.ceil(length / 16);
    const groupLength = Math.ceil(length / groups);
    const codes = [];
    for (let i = 0; i < groups; i++) {
      codes.push(generateAlphanumericCode(groupLength, letterCase));
    }
    return codes.join("");
  }

  // Generate a random string with the specified number of length
  const code = Math.random()
    .toString(36)
    .slice(2, 2 + length);

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
