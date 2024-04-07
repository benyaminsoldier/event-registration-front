
$(document).ready(()=>{
    refreshListOptions($('#status'))
    $('[type="submit"]').click((e)=>{
        
        try{
            e.preventDefault()
            if($('#first-name').val() === '' || $('#last-name').val()==='' || $('#id').val()==='' || $('#status').val()==='') throw new Error('Please complete all fields')
            else if(validateName($('#first-name').val())) throw new Error('Please enter only names')
            else if(validateName($('#last-name').val())) throw new Error('Please enter only names')
            else if(validateID($('#id').val())) throw new Error('IDs only contain numbers')
        
            
            $('#error').html('').hide()
            console.log('form succesfulle submited')
            $('form').submit()
        }
        catch(error){
            console.log(error)
            $('#error').html(error.message).show()
        }

    })

})
let validateName = (name)=>{
    console.log(name) //Why does it returns false instead of a string???
    let userName = name.split('')
    for(let i=0;i<userName.length;i++){
        if(!isNaN(userName[i])){
            return true
        }
    }    
    return false
        
}
let validateID = (id)=>{
 
    let userID = id.split('')
    for(let i=0;i<userID.length;i++){
        if(isNaN(userID[i])){
            return true
        } 
    } 
    return false   
        
}

let refreshListOptions = (list)=>{

    list.click(()=>{
        let val = list.val()
        list.val('')
        list.on('mouseout',()=>{
            list.val(val)
        })
    })

}