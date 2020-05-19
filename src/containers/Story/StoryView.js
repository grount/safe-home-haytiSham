import React from 'react';

import { withRoute } from 'services/routing/routerHOC';
import lang from 'services/lang.json';
import { Tags } from './components/Tags';
import { extractFieldsFromObj } from 'services/general/generalHelpers';
import { SimilarStories } from 'containers/Story/components/SimilarStories';
import { Footer } from 'containers/Story/components/Footer';
import { Header } from '../../components/Header';
import { TagsFilter } from '../Stories/components/TagsFilter';

export const StoryView = withRoute((props) => {
    const story = props.location.state;
    const changeLocationByPath = (path, params) => {
        props.history.push(path, params);
    };
    const proccessedStory = extractFieldsFromObj(story, [
        'background',
        'whatTriggeredChange',
        'howDidYouManged',
        'additionalnfo',
        'whatHelpedYou',
        'storyContent',
    ]);
    return (
        <div id={'story-page-container'}>
            <Header />
            <div className={'quote'} >
                <h1>
                    "אשה חזקה. מצליחה. מרוויחה טוב. יפהפייה. כל יום חוזרת הביתה והופכת לאפס"
                </h1>
                <h2>עדותה של ב', 23.01.20</h2>
                 <Tags tags={story.tags} />
            </div>
            {/*<button onClick={() => changeLocationByPath('/')}>Go back</button>*/}
            {proccessedStory &&
                Object.keys(proccessedStory).map((item, key) => (
                    <div key={key}>
                        <h6>{lang[item]}</h6>
                        <span>{proccessedStory[item]}</span>
                        <br />
                    </div>
                ))}
            <SimilarStories
                tags={story.tags}
                changeLocationByPath={changeLocationByPath}
            />
            <Footer />
        </div>
    );
});
