

export const loginUser = async (email :string , password :string)=>{
    const res = await fetch ('/api/signin' ,{
        method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    })
    if (!res.ok){
        throw new Error("Login Failed")
    }
    return res.json()
}