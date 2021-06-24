function reg(email,pass){
    const regV = /@/g;
    const result1 = email.match(regV);
    if(result1){
    console.log(email)
    }else{
         console.log('Please write correct email')
    }
    if (pass.length<=15){
        const regX = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{3}/g
        const result2 = pass.match(regX);
        if(result2){
            console.log(pass);
        }else{
            console.log("Please write correct password")
        }
    }
}

reg('eduardmelkonyan@mail.ru', 'Basic#5')