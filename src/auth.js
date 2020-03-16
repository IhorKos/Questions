export function getAuthForm(){
    return `
        <form class="mui-form" id="auth-form">
            <div class="mui-textfield mui-textfield--float-label">
              <input type="email" id="email" required > 
              <label for="email">Email (i@mail.com)</label>
            </div>
            <div class="mui-textfield mui-textfield--float-label">
              <input type="password" id="password" required > 
              <label for="password">Пароль (123456)</label>
            </div>
            <button 
               type="submit"           
               class="mui-btn mui-btn--raised mui-btn--primary"
            >
            Войти
          </button>
        </form>
        ` //https://console.firebase.google.com/u/0/project/podcast-app-35f67/authentication/users
}
export function authWithEmailAndPassword(email, password) {
    const apiKey = 'AIzaSyAHMyZuF2Y8jJxs5qaewNLT9gXyaKybLc4'
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
    //https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password    
    method : 'POST',
         body: JSON.stringify( {
         email, password,
        returnSecureToken: true
        }),
        headers: {
        'Content-Type': 'application/json'
    }
    })
    .then(response => response.json())
    .then(data => data.idToken)
}