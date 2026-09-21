import {useState} from 'react';

function Login({title}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   
   
    function handleSubmit(event) {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    }
    return (  
    <div>
        <h1>{title}</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} />


            <input type="password" placeholder="Password" 
            value={password}
             onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form> 
    </div>

    );
}

export default Login;