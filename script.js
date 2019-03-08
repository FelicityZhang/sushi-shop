const chef = document.querySelector( '#chef' )
const upPose = document.querySelector( '.upPose' )
const downPose = document.querySelector( '.downPose' )
const leftPose = document.querySelector( '.leftPose' )
const allDishs = document.querySelectorAll( '.dish' )
const deliDish = document.querySelector( '#deliContainer' )
const deliImage = document.querySelector( '#deliImage' )
const changDeliDish = document.querySelector( '.changedDish' )
const getOrder = document.querySelector( '.orderContainer' )

const bell = document.querySelector( '.bell' )
let counter = allDishs.length

const RIGHT = 39
const LEFT = 37
const DOWN = 40
const UP = 38

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
        chef.className = "downDishPose";
        chef.style.top = countVe + 'px';
    }

    if ( key == LEFT && countHe > 400 ) {
        countHe -= 50;
        chef.className = "leftDishPose";
        chef.style.left = countHe + 'px';
    }
} )


const removeDish = function () {
    for ( let i = 0; i < allDishs.length; i++ ) {
        dish = allDishs[ i ]
        dish.addEventListener( 'click', function ( event ) {
            if ( countVe != 250 ) {
                return
            }
            else {
                const diffValue = Math.abs( event.screenX - countHe )
                if ( diffValue < 60 ) {
                    allDishs[ i ].remove()
                    // allDishs[ i ].style.display = "none"
                    counter = counter - 1

                }
            }
        }
        )
    }
}

deliDish.addEventListener( 'click', function ( event ) {
    if ( countHe != 400 ) {
        return
    }
    else {
        const difference = Math.abs( event.screenY - countVe )
        console.log( 'difference: ', difference )
        if ( difference < 150 )
            deliImage.style.display = 'block'
        chef.className = "lookPose";
        setTimeout( function () {
            deliImage.style.display = 'none'
        }, 6000 )

    }
} )

function getRandomInt( min, max ) {
    min = Math.ceil( min );
    max = Math.floor( max );
    return Math.floor( Math.random() * ( max - min ) ) + min;
}

const getDish = function () {
    const Dishs = document.querySelectorAll( '.dish' )
    let n = getRandomInt( 0, Dishs.length )
    console.log( getOrder.childNodes[ 1 ].src )
    getOrder.childNodes[ 1 ].src = Dishs[ n ].childNodes[ 1 ].src
}
setInterval( getDish, 5000 )



const main = function () {
    removeDish()
    getDish()
}
main()

const checkForWinner = function () {
    chef.className = "downPose";
    console.log( counter )
    if ( counter === 0 ) {
        alert( "YOU WIN!" );
    }

}

bell.addEventListener( 'click', checkForWinner )























//const dish1 = document.querySelector( 'dish1' )
// const dish2 = document.querySelector( 'dish2' )
// const dish3 = document.querySelector( 'dish3' )
// const dish4 = document.querySelector( 'dish4' )
// const dish5 = document.querySelector( 'dish5' )
// const dish6 = document.querySelector( 'dish6' )
// const dish7 = document.querySelector( 'dish7' )
// let allDishs = [ dish1, dish2, dish3, dish4, dish5, dish6, dish7 ]