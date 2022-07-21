import React, {useEffect} from 'react';

function importScript() {
    if (window && document) {
      const script = document.createElement('script');
      const body = document.getElementsByTagName('body')[0];
      script.id = "reviewScript";
      script.src = 'http://localhost:8083/review.bundle.js';
      body.appendChild(script);
    }
}

const Reviews = () => {
    useEffect(() => {
        importScript();
    }, []);

    return (<div id ="review-dev-root"></div>);
}

export default Reviews;