export const setPetName =async ({request, response}:{request:any;response:any}) => {

    response.body = {
        "name": "default name"
    }
}

export const getPetName =async ({request, response}:{request:any;response:any}) => {
    
    response.body = {
        "name": "default name"
    }
}


export const setPetStatus =async ({request, response}:{request:any;response:any}) => {

    response.body = {
        "name": "default status"
    }
}

export const getPetStatus =async ({request, response}:{request:any;response:any}) => {
    
    response.body = {
        "name": "default status"
    }
}
