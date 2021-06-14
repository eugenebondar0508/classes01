'use strict';

function DomElement(selector, height, width, bg, fontSize){

    this.selector = selector;
    this.height = height;
    this.width = width;
    this. bg = bg;
    this.fontSize = fontSize;

}

DomElement.prototype.write = function(){
    let newElement;
    if(this.selector.substr(0,1) === '.'){
        newElement = document.createElement('div');
        newElement.classList.add(this.selector.substr(1));
    } else if(this.selector.substr(0,1) === '#'){
        newElement = document.createElement('p');
        newElement.id = this.selector.substr(1);
    }
    newElement = 'Привет!!!  Привет!!! Привет!!! Привет!!! Привет!!! Привет!!! Привет!!! Привет!!! Привет!!! Привет!!!  ';
    newElement.style.cssText = 'background-color:' + this.bg+';'
    'width:'+this.width+'px;'
    'height:'+this.height+'px;'
    'font-size:'+this.fontSize+ 'px;';
    document.write(newElement);
}

let newDom = new DomElement('.block', '10', '30', 'red', '14');
console.log(newDom);

newDom.write();