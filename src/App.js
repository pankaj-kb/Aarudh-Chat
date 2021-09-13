import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';

const projectID = '73182750-e32b-4a45-ab80-5d9e60a5fcdf';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID='73182750-e32b-4a45-ab80-5d9e60a5fcdf'
      userName='magma-master'
      userSecret='123123'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

    />
  );
};

// infinite scroll, logout, more customizations...

export default App;