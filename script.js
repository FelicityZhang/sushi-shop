const chef = document.querySelector( '#chef' )
const upPose = document.querySelector( '.upPose' )
const downPose = document.querySelector( '.downPose' )
const leftPose = document.querySelector( '.leftPose' )

const RIGHT = 39
const LEFT = 37
const DOWN = 40
const UP = 38



// Sushi on Bar

// Sushi Chef is holding
let sushiChefHolds = ""
let countHe = 400;
let countVe = 400;
document.addEventListener( 'keydown', function ( e ) {
    e.preventDefault()
    let key = e.which || e.keyCode;
    if ( key == RIGHT && countHe < 1000 ) {
        chef.className = "rightPose";
        countHe += 50;
        chef.style.left = countHe + 'px';

    }

    if ( key == UP && countVe > 250 ) {
        countVe -= 50;
        chef.className = "upPose";
        chef.style.top = countVe + 'px';
    }

    if ( key == DOWN && countVe < 550 ) {
        countVe += 50;
        chef.className = "downPose";
        chef.style.top = countVe + 'px';
    }

    if ( key == LEFT && countHe > 400 ) {
        countHe -= 50;
        chef.className = "leftPose";
        chef.style.left = countHe + 'px';
    }

    console.log( "Horizontal: " + countHe )
    console.log( " Vertical: " + countVe )
} )

const removeDish = function () {
    let allDishs = document.querySelectorAll( ".dish" );
    for ( let i = 0; i < allDishs.length; i++ ) {
        dish = allDishs[ i ]
        dish.addEventListener( 'click', function ( event ) {
            if ( countVe != 250 ) {
                return
                //you can not click if your vertical position is not 250
            }
            // get difference between chef and the dish he wants to pick
            // if the difference in an aronge 50, he can click
            else {
                const diffValue = Math.abs( event.screenX - countHe )
                if ( diffValue < 50 ) {
                    console.log( allDishs[ i ].children[ 0 ].src )
                    sushiChefHolds = allDishs[ i ].children[ 0 ].src
                    console.log( sushiChefHolds )
                    allDishs[ i ].remove()
                    // console.log( event.screenX )
                    // console.log( countHe )
                }

            }



        } )
    }

}

function getRandomInt( min, max ) {
    min = Math.ceil( min );
    max = Math.floor( max );

    return Math.floor( Math.random() * ( max - min ) ) + min; //The maximum is exclusive and the minimum is inclusive

}

const getDish = function () {
    let allDishs = document.querySelectorAll( ".dish" );
    let randomIndex = getRandomInt( 0, allDishs.length )

}
const main = function () {
    removeDish()
    // Every 15 seconds call this
    getDish()
}

main()