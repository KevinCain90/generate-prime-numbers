const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

function getPrimeNumbers(numberEntered) {
  let sieve = [];
  let i;
  let j;
  let primeNumbers = [];
  for (i = 2; i <= numberEntered; ++i) {
    if (!sieve[i]) {
      primeNumbers.push(i);
      for (j = i << 1; j <= numberEntered; j += i) {
        sieve[j] = true;
      }
    }
  }

  return primeNumbers;
}

app.get('/primeNumbers/:numberValue', function(req, res) {
  return res.send(getPrimeNumbers(req.params.numberValue));
});
