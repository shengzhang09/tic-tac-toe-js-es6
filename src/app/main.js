'use strict';
import './index.css';
import {RootComponent} from './root.component.js';


console.log('js is working!');
let containerDOM = document.body;
let rootComponent = new RootComponent(null, containerDOM);
rootComponent.build();
