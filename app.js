/**
 * For local testing purposes
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();

app.use(express.static(path.dirname(fileURLToPath(import.meta.url))));

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
