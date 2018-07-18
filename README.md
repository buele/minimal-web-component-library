minimal-web-component-library
=============================

Minimal web componens library (1.5 KB)


# Example

## index.html
```
<!DOCTYPE html>
<html>

  <head>
    <script src="webcomponents.js"></script>  
    <script src="minwc.min.js"></script>  
    <link rel="import" href="min-example.html">
  </head>
  
  <body>
    <min-example></min-example>
  </body>
  
</html>
```

## min-example.html

```
<template id="min-example">
  <h1>Component test</h1>
  <button id="button">DO</button>
  <style media="screen">
    h1{
      color:blue;
    }
    button {
      color:blue;
    }
  </style>
</template>
<script>
    class MinExample extends WebComponentBase{
      constructor(){
        super();
        this.shadow.querySelector("#button").addEventListener("click",function(e){
           alert("hello!")
        },false);
      }
      connectedCallback(){
        //
      }
    }
    customElements.define('min-example', MinExample);
</script>
```

## demo 

[link](https://run.plnkr.co/preview/cjjr9gfba0006335rueoq0wmd/)


## output
![demo](https://user-images.githubusercontent.com/1030870/42890273-b4c9cc5c-8aac-11e8-91c9-c4688b0f288d.png)




