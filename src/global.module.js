


export const mainObject = (function() {
    'use strict';

    const all = {
        tasks:[

        ]};
   
    const today = {
        tasks:[
            
        ]};

    const thisWeek = {
        tasks:[
            
        ]};

    const important = {
        tasks:[
            
        ]};
 
    const projects = {
        tasks: [

        ],
        
        get getTasks() {
            return this.tasks;
        }
        
    };
    

    return {
        all, today, thisWeek, 
        important, projects,
    }
}())