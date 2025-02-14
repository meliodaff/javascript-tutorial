function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("📦 Data received!"); // Simulates a delay
        }, 2000);
    });
}

console.log("Fetching data...");

fetchData()
    .then(data => console.log(data)) // Runs after 2s
    .catch(error => console.log("Error:", error));

console.log("Waiting...");
