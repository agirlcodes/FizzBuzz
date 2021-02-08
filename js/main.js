let rules = ((3, "fizz")
            (5, "buzz"));
let doRemainder = (num1 / num2);

    for (let index = 0; index < 31; index++) {
        const element = array[index];
        hold = ""
        rules.forEach(element => {
            if (doRemainder(element[0], index)==0){
                    hold = hold + element[1]
                    console.log("+index+")
                }
            }
        );
    }