let BASE_URL = "https://nest-blog-qdsa.onrender.com";

async function signUp(data) {
    try {
        return await fetch(`${BASE_URL}/api/user/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error.message);
    }
}

async function signIn(data) {
    try {
        return await fetch(`${BASE_URL}/api/user/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error.message);
    }
}

export { signIn, signUp }