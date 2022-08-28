function LogOut({ history }) {
    fetch('https://nexnotesapp.herokuapp.com/auth/logout')
        .then(res => res.json())
        .then(res => {
            history.push('/')
        })
        .catch(err => console.log(err))
}

export default LogOut;
