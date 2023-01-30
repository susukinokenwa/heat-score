const name = prompt("what is your name?")
const gender = prompt("What is you gender? boy or girl?")




if (gender === "boy"){
    let hair = prompt("how many hair do you have? from 1-10")
    let personality = prompt("Do you have a good personality? from 1-10")
    let money = prompt("How much money do you have?  ex:10000000")
    
    hair = parseInt(hair)
    personality = parseInt(personality)
    money = parseInt(money)
    if (money >= 10000000){ 
        money = 10
    } else if( money >= 100000 && money <= 10000)
    { money = 5
    } else {
        money = 1
    }
    let total = money + hair + personality
    document.write(`<p class="p1"> Hi ${name}, your total score is ${total} of 30</p>`)

    if (total >= 21 ){
        document.write(`<p class="p2">very good</p>`)
        document.write(`<img src="https://pbs.twimg.com/media/FlT1KffacAAc3_h?format=jpg&name=4096x4096" class="img1">`)
    }else if (total <= 21 && total>= 11){
        document.write(`<p class="p2">good</p> `)
        document.write(`<img src="https://pbs.twimg.com/media/FlT1KfeakAI0pg1?format=jpg&name=4096x4096" class="img1">`)
    } else if (total <= 11){
        document.write(`<p class="p2">not very good (I know the picture doesn't fit ==</p>`)
        document.write(`<img src="https://pbs.twimg.com/media/FlT1KfeaMAAwFk9?format=jpg&name=large" class="img1">`)
    }

    





} else if (gender == "girl") {
    let hair2 = prompt("Rate you hair 1-10")
    let beauty = prompt("How beautiful are you? 1-10")
    let sugar = prompt("Do you have sugar mommies? yes or no ")

    hair2 = parseInt(hair2)
    beauty = parseInt(beauty)
    

    if (sugar === "yes"){sugar =  parseInt(sugar)
        sugar = 10
    }else{sugar =  parseInt(sugar)
        sugar = 1
    } 

    let total2 = hair2 + beauty + sugar

    document.write(`<p class="p1">Hi ${name}, your total score is ${total2} of 30</p>`)

    if (total2 >= 21 ){
        document.write(`<p class="p2">very good</p>`)
        document.write(`<img src="https://pbs.twimg.com/media/Fm0SxBuacAAE3vi?format=jpg&name=4096x4096" class="img1">`)
    }else if (total2 <= 21 && total2>= 11){
        document.write(`<p class="p2">good </p>`)
        document.write(`<img src="https://pbs.twimg.com/media/FE8aTCUagAE3TdC?format=jpg&name=large" class="img1">`)
    } else if (total2 <= 11){
        document.write(`<p class="p2">not very good (I know the picture doesn't fit ==</p>`)
        document.write(`<img src="https://pbs.twimg.com/media/FE8aWkiakAMXqiE?format=jpg&name=large" class="img1">`)
    }


}else {
        document.write('<p class="p">BYE</p>')
    }