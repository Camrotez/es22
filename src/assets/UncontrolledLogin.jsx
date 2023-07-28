function UncontrolledLogin(){
    const handlelogin = ((e)=>{
        e.preventDefault()
        const username = e.target.elements.username.value
        const password = e.target.elements.password.value
        console.log({
            username:username,
            password:password
        });
    })
    return(
        <form onSubmit={handlelogin}>
            <input name="username" defaultValue="Luciano"/>
            <input name="password" type="password" />
            <button type="submit">Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}
export default UncontrolledLogin