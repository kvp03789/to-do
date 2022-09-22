import './style.css';
import {mainObject} from './global.module.js';
import {addToProjects} from './projects.module.js'
import {newProject} from './projects.module.js'
import { sortImportant, sortToday, sortThisWeek } from './sort.module.js';
import {isToday} from './sort.module.js'
import { addHeaderEvent } from './dom.header';
import { addSidebarEvent } from './dom.sidebar';

//dates for testing. these would be selected on calendar input thing
const testDate = new Date(2022, 8, 22);
const testDate2 = new Date();
//some console log statements for testing adding new projects,  
//then adding tasks to the project, then sorting tasks to temporal objects.

// console.log(addToProjects(newProject));
// console.log(newProject.createTask("materials","very important", testDate, false));
// console.log(newProject.createTask("hire help","look at home depot", testDate2, true))
// console.log(sortImportant());
// console.log(sortToday());
// console.log(sortThisWeek());
console.log(mainObject);
addHeaderEvent();
addSidebarEvent();
// console.log(newProject.deleteTask("materials"));
// console.log(newProject.deleteTask("hire help"));










