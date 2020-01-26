


function expand1() {
    // id from html
    let shape = document.getElementById("shape1");
    // class from css
    shape.classList.toggle("shape1");
        
    
        
    // resets other shapes 2,3,4,5. Removes then Adds to its original size 
        document.getElementById("shape2").classList.remove("shape2");
        document.getElementById("shape2").classList.add("shapeLeft");

        document.getElementById("shape3").classList.remove("shape1");
        document.getElementById("shape3").classList.add("shapeRight");

        document.getElementById("shape4").classList.remove("shape2");
        document.getElementById("shape4").classList.add("shapeLeft");

        document.getElementById("shape5").classList.remove("shape1");
        document.getElementById("shape5").classList.add("shapeRight");

}

function expand2() {
    // id from html
    let shape = document.getElementById("shape2");
    // class from css
    shape.classList.toggle("shape2");

    // resets other shapes 1,3,4,5. Removes then Adds to its original size 
    document.getElementById("shape1").classList.remove("shape1");
    document.getElementById("shape1").classList.add("shapeRight");

    document.getElementById("shape3").classList.remove("shape1");
    document.getElementById("shape3").classList.add("shapeRight");

    document.getElementById("shape4").classList.remove("shape2");
    document.getElementById("shape4").classList.add("shapeLeft");

    document.getElementById("shape5").classList.remove("shape1");
    document.getElementById("shape5").classList.add("shapeRight");
}

function expand3() {
    // id from html
    let shape = document.getElementById("shape3");
    // class from css
    shape.classList.toggle("shape1");

    // resets other shapes 1, 2,4,5. Removes then Adds to its original size 
    document.getElementById("shape1").classList.remove("shape1");
    document.getElementById("shape1").classList.add("shapeRight");
    
    document.getElementById("shape2").classList.remove("shape2");
    document.getElementById("shape2").classList.add("shapeLeft");

    document.getElementById("shape4").classList.remove("shape2");
    document.getElementById("shape4").classList.add("shapeLeft");

    document.getElementById("shape5").classList.remove("shape1");
    document.getElementById("shape5").classList.add("shapeRight");
}

function expand4() {
    // id from html
    let shape = document.getElementById("shape4");
    // class from css
    shape.classList.toggle("shape2");

    // resets other shapes 1,2,3,5. Removes then Adds to its original size 
    document.getElementById("shape1").classList.remove("shape1");
    document.getElementById("shape1").classList.add("shapeRight");
    
    document.getElementById("shape2").classList.remove("shape2");
    document.getElementById("shape2").classList.add("shapeLeft");

    document.getElementById("shape3").classList.remove("shape1");
    document.getElementById("shape3").classList.add("shapeRight");

    document.getElementById("shape5").classList.remove("shape1");
    document.getElementById("shape5").classList.add("shapeRight");
}

function expand5() {
    // id from html
    let shape = document.getElementById("shape5");
    // class from css
    shape.classList.toggle("shape1");

    // resets other shapes 1,2,3,4. Removes then Adds to its original size 
    document.getElementById("shape1").classList.remove("shape1");
    document.getElementById("shape1").classList.add("shapeRight");
    
    document.getElementById("shape2").classList.remove("shape2");
    document.getElementById("shape2").classList.add("shapeLeft");

    document.getElementById("shape3").classList.remove("shape1");
    document.getElementById("shape3").classList.add("shapeRight");

    document.getElementById("shape4").classList.remove("shape2");
    document.getElementById("shape4").classList.add("shapeLeft");
}

