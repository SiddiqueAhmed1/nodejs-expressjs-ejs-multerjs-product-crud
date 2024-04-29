// create unique id
export const uniqueId = () => {
  // lets take a counter var
  let counter = 0;

  // hexadecimal number with counter
  const counterHex = counter.toString(16).padStart(6, 0);

  // let current time by micro, not a timestamp
  const microSeconds = performance.now() * 1000;

  // current time convert to string
  const microHex = microSeconds.toString(5);

  // finally make the id by combine counterhex and microhex
  const uniqueId = counterHex + microHex;

  return uniqueId;
};

// create product slug
export const createSlug = (name) => {
  // convert the name to lowercase and replace the space with hypehn
  const slug = name.toLowerCase().replace(/\s+/g, "-");

  // replae all the special characeter
  const clearnSlug = slug.replace(/[^a-z0-9-]/g, "");
  return clearnSlug.trim();
};

