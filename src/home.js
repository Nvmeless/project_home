import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Task(content) {
    var Tache = {
        name: "",
        time: "",
        category: "",
        desc: "",
        pts: "",
        dateCommit: "",
        dateLimit: "",
        dateEnded: "",
        taskOwner: "",
        isAttributed: "",
    }
        render() {
            return (
                <div dateCommit={content.dateCommit}>

                </div>
            )
        }

}

class Desk extends React.Component{
    constructor(){

    }
}

