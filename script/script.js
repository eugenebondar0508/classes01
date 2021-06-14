'use strict';

function DomElement(selector, height, width, bg, fontSize){

    this.selector = selector;
    this.height = height;
    this.width = width;
    this. bg = bg;
    this.fontSize = fontSize;

}

DomElement.prototype.write = function(){
    let div = document.createElement('div');
    let p = document.createElement('p');
    let text = 'Привет!';
    if(this.selector.substr(0,1) === '.'){
        div.classList.add(this.selector.substr(1));
        div.innerHTML = '<div>'+text+'</div>';
        document.body.append(div);
    }

     else if(this.selector.substr(0,1) === '#'){
        p.id = this.selector.substr(1);
        p.innerHTML = '<p>'+text+'</p>';
        document.body.append(p);
    };
    div.style.cssText = `background-color:  ${this.bg};
    width:${this.width}px;
    height:${this.height}px;
    font-size:{this.fontSize} px;`;
    p.style.cssText = `background-color:  ${this.bg};
    width:${this.width}px;
    height:${this.height}px;
    font-size:{this.fontSize} px;`;

}

let newDom = new DomElement('.block', '100', '300', 'red', '32');
console.log(newDom);

newDom.write();