window.addEventListener('scroll',function(){
    let tamañopantalla = this.window.innerHeight;
    
    let Precentacion_Texto = this.document.getElementById('Precentacion_Texto');
    let posicion = Precentacion_Texto.getBoundingClientRect().top;
    if(posicion <= tamañopantalla){
        Precentacion_Texto.style.animation = 'mover 1s ease-out';
    }

    let Precentacion_Contacto = this.document.getElementById('Precentacion_Contacto');
    let posicion_contacto = Precentacion_Texto.getBoundingClientRect().top;
    if(posicion_contacto <= tamañopantalla){
        Precentacion_Contacto.style.animation = 'mover2 1.5s ease-out';
    }

    let Nosotros_Fuertes1 = this.document.getElementById('Nosotros_Fuertes1');
    let posicion_Fuertes1 = Precentacion_Texto.getBoundingClientRect().top;
    if(posicion_Fuertes1 <= tamañopantalla){
        Nosotros_Fuertes1.style.animation = 'aparecer 1.5s ease-out';
    }

    let Nosotros_Fuertes2 = this.document.getElementById('Nosotros_Fuertes2');
    let posicion_Fuertes2 = Precentacion_Texto.getBoundingClientRect().top;
    if(posicion_Fuertes2 <= tamañopantalla){
        Nosotros_Fuertes2.style.animation = 'aparecer 2.5s ease-out';
    }

    let Nosotros_Fuertes3 = this.document.getElementById('Nosotros_Fuertes3');
    let posicion_Fuertes3 = Precentacion_Texto.getBoundingClientRect().top;
    if(posicion_Fuertes3 <= tamañopantalla){
        Nosotros_Fuertes3.style.animation = 'aparecer 3.5s ease-out';
    }

    let Nosotros_Fuertes4 = this.document.getElementById('Nosotros_Fuertes4');
    let posicion_Fuertes4 = Precentacion_Texto.getBoundingClientRect().top;
    if(posicion_Fuertes4 <= tamañopantalla){
        Nosotros_Fuertes4.style.animation = 'aparecer 4.5s ease-out';
    }
    
})