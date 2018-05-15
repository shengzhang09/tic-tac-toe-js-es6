export class Component{
  //parent: parent component
  //containerDOM: DOM of current component container
  constructor(parent, containerDOM){
    this.parent = parent;
    this.containerDOM = containerDOM;
    this.attrs = this.containerDOM.attributes;
    this.mapper = new Map();
    this.state = {};
  }

  //Build the DOM of the component
  build(){
    this.init();
    let html = this.render();
    if(html!=null){
      this.containerDOM.innerHTML = html;
    }
    this.buildChildren();
    this.addEvents();
  }

  //Refresh the DOM of the component
  refresh(){
    this.attrs = this.containerDOM.attributes;
    let html = this.render();
    if(html!=null){
      this.containerDOM.innerHTML = html;
    }
    this.refreshChildren();
    this.addEvents();
  }

  //Add a single event to the component
  addEvent(className, func){
    let selectedChildren = this.containerDOM.getElementsByClassName(className);
    for(let selectedChild of selectedChildren){
      func(selectedChild);
    }
  }

  //Build a child component
  buildChild(tagName, func){
    let containerDOMs = document.getElementsByTagName(tagName);
    let i = 0;
    for(let containerDOM of containerDOMs){
      let component = func(containerDOM);
      this.mapper.set(i, component);
      component.build();
      i++;
    }
  }

  //Refresh a child component
  refreshChild(tagName){
    let containerDOMs = document.getElementsByTagName(tagName);
    let i = 0;
    for(let containerDOM of containerDOMs){
      let component = this.mapper.get(i);
      component.containerDOM = containerDOM;
      component.refresh();
      i++;
    }
  }

  //Update the state of the component
  setState(updates){
    this.state = Object.assign(this.state, updates);
    this.refresh();
  }

  //Initialize component before rendering the component DOM
  init() {

  }

  //Render the component DOM
  render(){
    return null;
  }

  //Build all child components
  buildChildren(){

  }

  //Refresh all child components
  refreshChildren(){

  }

  //Add all events to the component
  addEvents(){

  }

}
