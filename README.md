# javascript-promises
what is promise and how to use it 

<p>JavaScript Promises are a programming construct used to handle asynchronous operations in JavaScript. They are a way of handling callbacks and making asynchronous code easier to read, write, and reason about.</p>

<p>A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. When a Promise is created, it is in one of three states:</p>

<ul>
  <li>Pending: The initial state of a Promise, when it is neither fulfilled nor rejected.</li>
  <li>Fulfilled: The state of a Promise when it has successfully completed and returned a value.</li>
  <li>Rejected: The state of a Promise when it has failed and returned an error.</li>
</ul>

<p>A Promise can transition from the pending state to either the fulfilled or rejected state. Once a Promise is fulfilled or rejected, it cannot transition to any other state.</p>

<p>Promises have two main methods that allow you to handle their eventual outcome: then() and catch(). The then() method is called when a Promise is fulfilled and allows you to handle the resolved value, while the catch() method is called when a Promise is rejected and allows you to handle any errors that may have occurred.</p>

<p>We then use the <strong>then()</strong> method to handle the resolved value and log it to the console. We also use the catch() method to handle any errors that may have occurred and log the error message to the console.</p>
