import React from 'react'

function CheckValidate(type, input) {
    if(type == 'Text') {
        if(input == '')
            return false
        else
            return true
    }
    else if(type == 'Email') 
    {
        const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{1,9}[\.][a-z]{2,5}/g;
        const result = pattern.test(input);

        return result
}
}

export default CheckValidate
