export function getRandomAsciiCharacter(symbols: string[]): string {
  // ASCII codes for printable characters range from 32 (space) to 126 (tilde)
  const minAsciiCode = 32;
  const maxAsciiCode = 126;

  let randomChar: string;

  do {
    // Generate a random integer within the specified range
    const randomAsciiCode =
      Math.floor(Math.random() * (maxAsciiCode - minAsciiCode + 1)) + minAsciiCode;
    // Convert the ASCII code to its corresponding character
    randomChar = String.fromCharCode(randomAsciiCode);
  } while (symbols.includes(randomChar));

  return randomChar;
}
