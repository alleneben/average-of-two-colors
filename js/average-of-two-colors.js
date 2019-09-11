/** 
 * 
 * Author: Eben Allen Tetteh
*/

const average_color = (firstcolor, secondcolor) => {
    let avg_color='', rgb1 = compute_rgb(firstcolor),rgb2 = compute_rgb(secondcolor);
       
    for(let i=0;i<rgb1.length;i++){        
        avg_color += compute_avg(rgb1[i],rgb2[i]).toString(16)
    }

    return '#'+avg_color;
}

/** 
 *  this function splits the hex strings into pairs and 
    compute its integer representation. It returns an array
    of the rgb components
*/
const compute_rgb = (color) => {
    return [parseInt(color.slice(0,2),16), parseInt(color.slice(2,4),16), parseInt(color.slice(4,6),16)]
}


/** 
 *  this function computes the avarage of the rgb
    components of the two colors
*/
const compute_avg = (rgb1,rgb2) => {
    return parseInt((rgb1 + rgb2)/2)
}

let new_color = average_color('feca1d','f6c5be')
console.log(new_color);



