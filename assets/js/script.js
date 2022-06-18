
// TODO: Declare any global variables we need
function displayHeadTails(x, y, z) {
    let display = document.getElementById(x)
    display.innerHTML = (y ) + z

}


    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    let pennyImage = document.querySelector("#penny-image")
    let flipBtn = document.querySelector("#flip")
    let numHeads = 0
    let numTails = 0
    let clearScore = document.querySelector("#clear")


    flipBtn.addEventListener("click", function(){
        let heads = Math.random() < 0.5
        if(heads) {
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'You Flipped Heads!'
            numHeads +=1
            displayHeadTails("heads", numHeads, null)
            
        } else {
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'You Flipped Tails'
            numTails +=1
            displayHeadTails("tails", numTails, null)
        }
        let totalFlips = numHeads + numTails
        let tailPercent = (numTails / totalFlips) * 100
        let headPercent = (numHeads / totalFlips) * 100
        displayHeadTails("heads-percent", headPercent, "%")
        displayHeadTails("tails-percent", tailPercent, "%")

       return numHeads
       return tailPercent
       return numTails
       return headPercent
    })

    clearScore.addEventListener("click", function(){
        numHeads = 0
        numTails = 0
        tailPercent = 0
        headPercent = 0
        displayHeadTails("heads-percent", headPercent, "%")
        displayHeadTails("tails-percent", tailPercent, "%")
        displayHeadTails("heads", numHeads, null)
        displayHeadTails("tails", numTails, null)
    })

    
            



    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)


