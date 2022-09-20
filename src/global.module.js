import { newHomeTask } from "./home.module";

export const globalModule = (function() {
    'use strict';

    const home = {
        "projectList": [

        ]
    };
    const today = {};
    const week = {};
    const projects = {
        "projectList": [

        ]
    };
    const notes = {}; 
    
    return {
        home, today, week, projects, notes,
    }
})

globalModule[home].projectList.push(newHomeTask);