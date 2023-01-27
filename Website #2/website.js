function go() {


    let seed1 = Math.random();
    let seed2 = Math.random();
    let seed3 = Math.random();
    let seed4 = Math.random();
    let seed5 = Math.random();
    let seed6 = Math.random();
    let seed7 = Math.random();

    console.log(seed1);
    console.log(seed2);
    console.log(seed3);
    console.log(seed4);
    console.log(seed5);
    console.log(seed6);
    console.log(seed7);
    let number1 = 1;
    let number2 = 1;
    let head1 = 1;
    let head2 = 1;
    let body1 = 1;
    let body2 = 1;
    gibberishending = 1;

    if (seed1 > 0.85) {
        number1 = "16"
    } else if (seed1 > 0.71) {
        number1 = '32'
    } else if (seed1 > 0.57) {
        number1 = '64'
    } else if (seed1 > 0.42) {
        number1 = '128'
    } else if (seed1 > 0.28) {
        number1 = '5 million'
    } else if (seed1 > 0.14) {
        number1 = '60 billion'
    } else {
        number1 = '74 trillion'
    };

    if (seed2 > 0.875) {
        head1 = 'Kilo'
    } else if (seed2 > 0.75) {
        head1 = 'Mega' 
    } else if (seed2 > 0.625) {
        head1 = 'Giga' 
    } else if (seed2 > 0.5) {
        head1 = 'Exa' 
    } else if (seed2 > 0.375) {
        head1 = 'Super' 
    } else if (seed2 > 0.250) {
        head1 = 'Penta' 
    } else if (seed2 > 0.125) {
        head1 = 'Bloings of ' 
    } else {
        head1 = "Vatts of "
    };

    if (seed3 > 0.833) {
        body1 = "bams"
    } else if (seed3 > 0.666) {
        body1 = "biiiiiites"
    } else if (seed3 > 0.5) {
        body1 = "pixels"
    } else if (seed3 > 0.333) {
        body1 = "vroxels"
    } else if (seed3 > 0.1666) {
        body1 = "blatts"
    } else {
        body1 = "resolutions"
    };


    if (seed4 > 0.85) {
        number2 = "16"
    } else if (seed4 > 0.71) {
        number2 = '32'
    } else if (seed4 > 0.57) {
        number2 = '64'
    } else if (seed4 > 0.42) {
        number2 = '128'
    } else if (seed4 > 0.28) {
        number2 = '5 million'
    } else if (seed4 > 0.14) {
        number2 = '60 billion'
    } else {
        number2 = '74 trillion'
    };

    if (seed5 > 0.875) {
        head2 = 'Kilo'
    } else if (seed5 > 0.75) {
        head2 = 'Mega' 
    } else if (seed5 > 0.625) {
        head2 = 'Giga' 
    } else if (seed5 > 0.5) {
        head2 = 'Exa' 
    } else if (seed5 > 0.375) {
        head2 = 'Super' 
    } else if (seed5 > 0.250) {
        head2 = 'Penta' 
    } else if (seed5 > 0.125) {
        head2 = 'Bloings of ' 
    } else {
        head2 = "Vatts of "
    };

    if (seed6 > 0.833) {
        body2 = "bams"
    } else if (seed6 > 0.666) {
        body2 = "biiiiiites"
    } else if (seed6 > 0.5) {
        body2 = "pixels"
    } else if (seed6 > 0.333) {
        body2 = "vroxels"
    } else if (seed6 > 0.1666) {
        body2 = "blatts"
    } else {
        body2 = "resolutions"
    };

    if (seed7 > 0.75) {
        gibberishending = "3 lines of Vode"
    } else if (seed7 > 0.5) {
        gibberishending = "Hyperresolution Performance"
    } else if (seed7 > 0.25) {
        gibberishending = "4k FPS"
    } else {
        gibberishending = "4 whole files"
    };


    const gibberish = 'whopping ' + number1 + ' ' + head1 + body1 + ', ' + number2 + ' ' + head2 + body2 + ', and ' + gibberishending + '.';
    console.log(gibberish)
    alert(gibberish)
    



    document.getElementById('gibberishgenerator').innerHTML = gibberish;
    
}


go();