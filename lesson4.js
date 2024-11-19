function addToCart(){
    alert('Added');
}

//i just added a method like Thread.sleep() in between the cl and the al, i also added the keyword 'async' in the function -- idk why, vs code said that i need it. 
async function buyNow(){
    console.log('Loading...');
    //this is the method for the Thread.sleep()
    await new Promise(r => setTimeout(r, 1000));
    alert('Purchased');
}
