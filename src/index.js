import './style.css';
import {mainObject} from './global.module.js';
import {addToProjects} from './projects.module.js'
import {newProject} from './projects.module.js'
import {attempt} from './projects.module.js'
import { sortImportant } from './sort.module.js';



console.log(addToProjects(newProject));

// console.log(attempt);
console.log(newProject.createTask("materials","this is very very important", "09-02", false));
console.log(newProject.createTask("hire help","look at home depot", "10-02", true))
console.log(sortImportant());
console.log(mainObject);







