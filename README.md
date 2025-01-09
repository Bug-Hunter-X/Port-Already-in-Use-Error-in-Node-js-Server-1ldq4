# Node.js Port Already in Use Error

This repository demonstrates a common error encountered when developing Node.js applications: the `EADDRINUSE` error, which occurs when your server attempts to bind to a port that is already in use.  The example shows a basic HTTP server, and how to handle the situation where the specified port is unavailable.

## Reproducing the Error

1. Clone this repository.
2. Run `node server.js`.
3. If 8080 is available, the server starts; otherwise, you will see an error.
4. Run `node serverSolution.js` to see how to handle it gracefully.

## Solution

The provided solution shows how to handle the error using a `try...catch` block.  If the port is in use it attempts to start on the next available port.