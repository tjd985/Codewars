// DESCRIPTION:
// The rgb function is incomplete.Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input-- > output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

function rgb(r, g, b) {
  const arr = [r, g, b];
  let result = "";

  for (let value of arr) {
    if (value < 0) value = 0;
    else if (value > 255) value = 255;

    value = value.toString(16);
    if (value.length < 2) value = "0" + value;

    result += value.toUpperCase();
  }
  return result;
}
