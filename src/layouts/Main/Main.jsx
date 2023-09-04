import Headline from '../../components/headline';
import Movies from '../../components/movies';
import React from 'react';

class Main extends React.Component{
   
    render(){
        return(
            <div className='main fixed-container'>
                <Headline/>
                <Movies/>
            </div>
        );
    }
}

export default Main;