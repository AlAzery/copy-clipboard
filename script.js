     function copy(){
        var input= document.getElementById('text');
        input.select();
        document.execCommand("copy");
        document.getElementById("show").innerHTML='"'+input.value+'"';
      }