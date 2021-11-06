import React from 'react';
import Info from '@material-ui/icons/Info';
import FirbeManu from '@material-ui/icons/FiberManualRecord';
import "./Home.css";

function Home() {
    const newArticle = (heading, subtitle) =>(
         <div className="widgets-article">
             <div className="widgets-articleLeft">
                <FirbeManu />
             </div>
             <div className="widgets-articleRight">
                  <h4>{heading}</h4>
                  <p>{subtitle}</p>
             </div>
         </div>
    );
    return (
        <div className="widgets">
             <div className="widgets-header">
                 <h2>Linked Youtube</h2>
                 <Info />
             </div>
            {newArticle ("Keep going on to your field","Try to do more than you say")}
            {newArticle ("Your time is limited, so don't waste it living someone else's life.","Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs")}
            {newArticle ("If life were predictable it would cease to be life,","and be without flavor. -Eleanor Roosevelt")}
            {newArticle ("If you look at what you have in life, you'll always have more. "," If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey")}
            {newArticle ("If you set your goals ridiculously high and it's a failure, you will fail above","everyone else's success. -James Cameron")}
            {newArticle ("Life is what happens when you're busy","making other plans. -John Lennon")}
            {newArticle ("Spread love everywhere you go. Let no one ever come","to you without leaving happier. -Mother Teresa")}
            {newArticle ("When you reach the end of your rope, tie a knot in","it and hang on. -Franklin D. Roosevelt")}
            {newArticle ("Always remember that you are absolutely unique.","Just like everyone else. -Margaret Mead")}
            {newArticle ("Don't judge each day by the harvest you reap but"," by the seeds that you plant. -Robert Louis Stevenson")}
            {newArticle ("The future belongs to those who believe in the beauty","of their dreams. -Eleanor Roosevelt")}
            {newArticle ("Tell me and I forget. Teach me and I remember. ","Involve me and I learn. -Benjamin Franklin")}
            {newArticle ("The best and most beautiful things in the world cannot be seen or even","touched — they must be felt with the heart. -Helen Keller")}
            {newArticle ("It is during our darkest moments that we must","focus to see the light. -Aristotle")}
            {newArticle ("Whoever is happy will make others happy too. -Anne Frank","focus to see the light. Anne Frank")}
            {newArticle ("Do not go where the path may lead, go instead","where there is no path and leave a trail. -Ralph Waldo Emerson")}
            {newArticle ("Spread love everywhere you go. Let no one ever come to","you without leaving happier. -Mother Teresa")}
            {newArticle ("When you reach the end of your rope, tie a knot in","it and hang on. -Franklin D. Roosevelt")}
            {newArticle ("Always remember that you are absolutely unique. ","Just like everyone else. -Margaret Mead")}
            {newArticle ("Don't judge each day by the harvest you reap but by","the seeds that you plant.-Robert Louis Stevenson")}
            {newArticle ("The future belongs to those who believe in "," the beauty of their dreams. -Eleanor Roosevelt")}
            {newArticle ("Tell me and I forget. Teach me and I remember.","Involve me and I learn. -Benjamin Franklin")}
            {newArticle ("The best and most beautiful things in the world cannot ","be seen or even touched - they must be felt with the heart.-Helen Keller")}
            {newArticle ("Whoever is happy will make others happy too. ","  -Anne Frank")}
            {newArticle ("Do not go where the path may lead, go instead where ","there is no path and leave a trail.-Ralph Waldo Emerson")}
        </div>
    )
}

export default Home;
