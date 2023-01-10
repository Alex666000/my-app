import React from 'react';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';

const App = (props: any) => {
    console.log('App rendered')

    return (
        <div>
            <PageTitle title={'---App Component---'}/>
            <PageTitle title={'WOW'}/>

            AppTitle-1
            <Rating value={3}/>
            <Accordion title={'Привет'}/>
            AppTitle-2

            <div>--------------------</div>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );

    type PageTitlePropsType = {
        title: string
    }

    function PageTitle(props: PageTitlePropsType) {
        return <div >{props.title}</div>
    }

}


export default App

