async function fetchData() {
    console.log('Start fetching...');
    await new Promise(resolve => setTimeout(resolve, 3000)); // Simulating 3s delay
    console.log('Data received!');
}

console.log('Before calling fetchData()');
fetchData();
console.log('After calling fetchData()');
