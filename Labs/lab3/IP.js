const ipToInt = (ip = '127.0.0.1') => {
  const parts= ip.split('.').map(Number);
  let result = 0;
  for (const part of parts) {
    result = (result << 8) + part;
  }
  return result;
};

console.log(ipToInt());