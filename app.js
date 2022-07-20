let puntaje=0;
//boton comenzar
document.getElementById("Comenzar").addEventListener('click' ,()=>{ 
   let inputName=document.getElementById('name').value;
   if(inputName===''){
    alert('Ingresa un nombre...');
  }else{
     document.getElementById('nombre').innerText=inputName;
     document.getElementById('ventana-inicio').style.display="none";
     document.getElementById('Opcion-tema').style.display="block";
  }
})
//Boton opciones de tema
document.getElementById('Musica-clasico').addEventListener('click',()=>{
 document.getElementById('Opcion-tema').style.display="none"; 
 document.getElementById('GeneroClasico').style.display="block";

})

document.getElementById('Musica-electro').addEventListener('click',()=>{
  document.getElementById('Opcion-tema').style.display="none"; 
  document.getElementById('GeneroElectro').style.display="block";

})

//Boton Responder1
document.getElementById('responder').addEventListener('click', ()=>{
  let questionOne=document.querySelector('input[name="clasica"]:checked');
 if(!questionOne) {
  return alert('Selecciona la primera pregunta')
 }
  if(questionOne.value==='Ilich'){
      document.getElementById('rpta1').innerText='Primera pregunta: Correcta';
      document.getElementById('rpta1').style.color='#1E8449';
document.getElementById('rpta1').style.backgroundColor='#FBFCFC';
      puntaje++;
    }else if(questionOne.value==='Chopin'){
      document.getElementById('rpta1').innerText='Primera pregunta: Incorrecta \n Rpta correcta: Piotr Ilich Chaikovski';
      document.getElementById('rpta1').style.color='#9E0B2C';
      }else{
        document.getElementById('rpta1').innerText='Primera pregunta: Incorrecta \n Rpta correcta: Piotr Ilich Chaikovski';
        document.getElementById('rpta1').style.color='#9E0B2C';
      }

  let questionTwo=document.querySelector('input[name="clasica2"]:checked');
  if(!questionTwo) {
   return alert('Selecciona la segunda pregunta')
  }
  if(questionTwo.value==='Verdi'){
    document.getElementById('rpta2').innerText='Segunda pregunta: Incorrecta \n Rpta correcta: Ludwig van Beethoven';
    document.getElementById('rpta2').style.color='#9E0B2C';
    }else if(questionTwo.value==='Puccini'){
      document.getElementById('rpta2').innerText='Segunda pregunta: Incorrecta \n Rpta correcta: Ludwig van Beethoven';
      document.getElementById('rpta2').style.color='#9E0B2C';
      }else{
        document.getElementById('rpta2').innerText='Segunda pregunta: Correcta';
        document.getElementById('rpta2').style.color='#1E8449';
        puntaje++;
      }
  
  let questionThree=document.querySelector('input[name="clasica3"]:checked');
  if(!questionThree) {
    return alert('Selecciona la tercera pregunta')
  }
  if(questionThree.value==='Violin'){
    document.getElementById('rpta3').innerText='Tercera pregunta: Correcta';
    document.getElementById('rpta3').style.color='#1E8449';
    puntaje++;
    }else if(questionThree.value==='Piano'){
      document.getElementById('rpta3').innerText='Tercera pregunta: Incorrecta \n Rpta Correcta: Violín';
      document.getElementById('rpta3').style.color='#9E0B2C';
      }else{
        document.getElementById('rpta3').innerText='Tercera pregunta: Incorrecta\n Rpta Correcta: Violín';
        document.getElementById('rpta3').style.color='#9E0B2C';
      }
  
  document.getElementById('puntaje').innerText='Puntaje total :\n'+ puntaje; 
  document.getElementById('GeneroClasico').style.display="none";
  document.getElementById('Opcion-respuestas').style.display="block";

  document.querySelector('input[name="clasica"]:checked').checked=false;
  document.querySelector('input[name="clasica2"]:checked').checked=false;
  document.querySelector('input[name="clasica3"]:checked').checked=false;
} )

//Boton Responder2
document.getElementById('responder2').addEventListener('click', function(){
  let questionOne=document.querySelector('input[name="electro"]:checked');
  if(!questionOne) {
    return alert('Selecciona la primera pregunta')
   }
  if(questionOne.value==='cultos'){
      document.getElementById('rpta1').innerText='Primera pregunta: Correcta';
      document.getElementById('rpta1').style.color='#1E8449';
      puntaje++;
    }else if(questionOne.value==='bajas'){
      document.getElementById('rpta1').innerText='Primera pregunta: Incorrecta \n Rpta correcta: Los más cultos';
      document.getElementById('rpta1').style.color='#9E0B2C';
      }else{
        document.getElementById('rpta1').innerText='Primera pregunta: Incorrecta \n Rpta correcta: Los más cultos';
        document.getElementById('rpta1').style.color='#9E0B2C';
      }

  let questionTwo=document.querySelector('input[name="electro2"]:checked');
  if(!questionTwo) {
    return alert('Selecciona la segunda pregunta')
   }
  if(questionTwo.value==='principio'){
    document.getElementById('rpta2').innerText='Segunda pregunta: Incorrecta \n Rpta correcta: En los años 70 del siglo XX';
    document.getElementById('rpta2').style.color='#9E0B2C';
    }else if(questionTwo.value==='medio'){
      document.getElementById('rpta2').innerText='Segunda pregunta: Incorrecta \n Rpta correcta: En los años 70 del siglo XX';
      document.getElementById('rpta2').style.color='#9E0B2C';
      }else{
        document.getElementById('rpta2').innerText='Segunda pregunta: Correcta';
        document.getElementById('rpta2').style.color='#1E8449';
        puntaje++;
      }
  
  let questionThree=document.querySelector('input[name="electro3"]:checked');
  if(!questionThree) {
    return alert('Selecciona la tercera pregunta')
  }
  if(questionThree.value==='naturaleza'){
    document.getElementById('rpta3').innerText='Tercera pregunta: Incorrecta\n Rpta Correcta: Sonidos creados por ordenadores y similiares';
    document.getElementById('rpta3').style.color='#9E0B2C';
    }else if(questionThree.value==='humana'){
      document.getElementById('rpta3').innerText='Tercera pregunta: Incorrecta \n Rpta Correcta: Sonidos creados por ordenadores y similiares';
      document.getElementById('rpta3').style.color='#9E0B2C';
      }else{
        document.getElementById('rpta3').innerText='Tercera pregunta: Correcta';
        document.getElementById('rpta3').style.color='#1E8449';
         puntaje++;
      }
  document.getElementById('puntaje').innerText='Puntaje total :\n'+ puntaje; 
  document.getElementById('GeneroElectro').style.display="none";
  document.getElementById('Opcion-respuestas').style.display="block";

  document.querySelector('input[name="electro"]:checked').checked=false;
  document.querySelector('input[name="electro2"]:checked').checked=false;
  document.querySelector('input[name="electro3"]:checked').checked=false;

})

document.getElementById('volver-jugar').addEventListener('click' ,()=>{
  puntaje=0;
  document.getElementById('Opcion-respuestas').style.display="none";
  document.getElementById('Opcion-tema').style.display="block";


})

document.getElementById('nuevo-jugador').addEventListener('click' ,()=>{
  puntaje=0;
  document.getElementById('name').value='';
  document.getElementById('nombre').innerText='';
  document.getElementById('Opcion-respuestas').style.display="none";
  document.getElementById('ventana-inicio').style.display="block";
})