import { ChatEngine } from 'react-chat-engine'


const  ChatsPage =(props) =>{
    return (
    <ChatEngine
      publicKey={''}
      userName={props.user.username}
      userSecret={props.user.secret}
    />
    )
}

export default ChatsPage;