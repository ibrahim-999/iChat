import {ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';


const App = () => {

    if(!localStorage.getItem('username')) return<LoginForm />


    return (
        <ChatEngine
        height="100vh"
        projectID="75de2e57-df3a-43ae-a2e2-e9b5ac8aa698"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        rednerChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
    )
}
export default App;