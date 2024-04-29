

const sendLogin = async  ()=>{
    const user = document.getElementById('user').value;
    const pwd = document.getElementById('pwd').value;

    try{
        const response = await fetch("http://localhost:1122/login", {
            method: "POST",
            headers: { "Content-Type": 'applicaation/json'},
            credentials: "include",
            body: JSON.stringify({user,pwd})
        });
        if(!response.ok){
            if(response.status === 401){
                return await sendRefreshToken();
            }
            throw new Error(`${response.status} ${response.statusText}`)
        }
    } catch (err){
        console.log(err.stack)
        displayErr();
    }
}

const sendRefreshToken = ()=>{
    console.log("fresh")
}

const displayErr = ()=>{
    console.log("err")
}