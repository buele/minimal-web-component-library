



    

class WebComponentBase extends HTMLElement{
  _loadLocalDoc(){
    this.localDoc = (document._currentScript || document.currentScript).ownerDocument;
    ShadyCSS.prepareTemplate(
      this.localDoc.querySelector('template#'+this.is), 
      this.is);
    this.shadow = this.attachShadow({mode: 'open'});
    var template = this.localDoc.querySelector('template#'+ this.is);
    this.shadow.appendChild(template.content.cloneNode(true));
  }
  
  
  get is(){
    return this._toSnakeCase(this.constructor.name);
  }
  
  constructor(){
    super();
    
    this._loadLocalDoc();
    
  }
  
  _toSnakeCase(cammelCase) {
      var upperChars = cammelCase.match(/([A-Z])/g);
      if (! upperChars) return cammelCase;
      var str = cammelCase.toString();
      for (var i = 0, n = upperChars.length; i < n; i++) 
          str = str.replace(
            new RegExp(upperChars[i]), '-' + upperChars[i].toLowerCase());
      if (str.slice(0, 1) === '-') 
          str = str.slice(1);
      return str;
   };
}

  
  
//customElements.define('x-button', XButton);
    
    
