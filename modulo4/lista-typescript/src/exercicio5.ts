    type users = {
        name: string,
        email: string,
        role: string
    }  

    const usersList =  [
        {name: "Rogério", email: "roger@email.com", role: "user"},
        {name: "Ademir", email: "ademir@email.com", role: "admin"},
        {name: "Aline", email: "aline@email.com", role: "user"},
        {name: "Jéssica", email: "jessica@email.com", role: "user"},  
        {name: "Adilson", email: "adilson@email.com", role: "user"},  
        {name: "Carina", email: "carina@email.com", role: "admin"}      
    ]

    function getUsers(usersList:users[]){
        const filterList = usersList.filter((item) => item.role === "admin")

        const filterEmail = filterList.map((email) => {
            return email.email
        })
    return filterEmail
}

    console.log(getUsers(usersList))