$(document).ready(function () {
    $("#submit").click(function (event) {
        let array = $("#numbers").val().split(",")
        let index = Number($("#start").val())
        let bool_index = Number.isNaN(index)
        let bool_array
        let bool = Boolean(bool_array || bool_index) 
        let jdistance = ""
        let kdistance = ""

        for (let j = index; j >= 0; j--) {
            if (j == 0) {
                //console.log(`${j} is index of j`)
                jdistance = j
                break
            } else if (j != 0 && Number(array[j]) > Number(array[j - 1])) {
                //console.log(`${j} is index of j`)
                jdistance = j
                break
            } else if (j != 0 && Number(array[j]) <= Number(array[j - 1])) {
                j = j--
            }
        }
       
        for (let k = index; k < array.length; k++) {
            if (Number(array[k]) > Number(array[k + 1])) {
                //console.log(`${k} is index of k`)
                kdistance = k
                break
            } else if (Number(array[k]) <= Number(array[k + 1])) {
                k = k++
            } else if (k == (array.length - 1)) {
                //console.log(`${k} is index of k`)
                kdistance = k
                break
            }
        }

        //For valid and invalid inputs
        if (bool == true) {
            $(".error").text("Invalid inputs")
            $(".status").text("")
        } else if (bool != 'true' && Number(index) > (array.length - 1)) {
            $(".error").text("Invalid input of teen start.")
            $(".status").text("")
        } else if (bool != 'true' && Number(index) <= (array.length - 1)) {
            let distance = (kdistance - jdistance) + 1
            $(".status").text(`${distance} is the distance between j and k.`)
            $(".error").text("")
        }

        //For no field inputs
        let numberField = $("#numbers").val()
        let indexField = $("#start").val()

        if (numberField == "" && indexField != "") {
            $(".error").text("Please input numbers separated by comma.")
            $(".status").text("")
        } else if (numberField != "" && indexField == "") {
            $(".error").text("Please input teen start index.")
            $(".status").text("")
        } else if (numberField == "" && indexField == "") {
            $(".error").text("Please complete details.")
            $(".status").text("")
        }
 
        //To check if the input in numberfield is a number
        for (let i = 0; i < array.length; i++) {
            let identifier = Number.isNaN(array[i])
            if (identifier == 'true') {
                bool_array = true
            }
        }  
    })
})