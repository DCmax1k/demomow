

const checkAuth = async () => {
    try {
        const response = await fetch('/auth', {
            method: 'POST',
        });
        const data = await response.json();
        console.log(data);
        if (data.auth != 'success') return false;
        if (data.auth == 'success') {
            return data.user;
        }
    } catch(err) {
        console.error(err);
    }
}

export default checkAuth;