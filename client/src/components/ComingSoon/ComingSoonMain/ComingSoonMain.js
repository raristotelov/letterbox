import { useState } from 'react';
import ComingSoonContext from '../../../contexts/ComingSoonContext'
import SubscribedUserContent from './SubscribedUserContent';
import UnsubscribedUserContent from './UnsubscribedUserContent';

const MainContent = () => {
    const [subscribedState, setSubscribedState] = useState({email:''});

    return (
        
        <ComingSoonContext.Provider value={[subscribedState, setSubscribedState]}>
            {subscribedState.email
                ? <SubscribedUserContent />
                : <UnsubscribedUserContent />
            }
        </ ComingSoonContext.Provider>      
    )
}

export default MainContent;