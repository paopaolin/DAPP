const express = require("express");
// Import Moralis
const Moralis = require("moralis").default;
// Import the EvmChain dataType
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const app = express();
const port = 3000;

// Add a variable for the addressapi key,  and chain
const MORALIS_API_KEY = "skEW4HU4hcNPUeZTdz28htN3yd579bUsARC0NxX0U6LyUtgEYkFeN3AzcwW5qwrr";
const address = "0x216f52879d2304fe3683713d9862e842a2Db7bAC";
const chain = EvmChain.ETHEREUM;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Add this a startServer function that initialises Moralis
const startServer = async () => {
  await Moralis.start({
    apiKey: "skEW4HU4hcNPUeZTdz28htN3yd579bUsARC0NxX0U6LyUtgEYkFeN3AzcwW5qwrr",
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

// Call startServer()
startServer();
