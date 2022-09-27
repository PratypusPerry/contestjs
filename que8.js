var arr = ["Pratyush", "King", "Pratyush",
            "God", "God", "King"];
 
    const removeDuplicates=(arr)=> {
        return arr.filter((element,
            pos) => arr.indexOf(element) === pos);
    }
    console.log(removeDuplicates(arr));