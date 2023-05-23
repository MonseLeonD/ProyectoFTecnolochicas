let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Ingeniera mecatrónica')
  .pauseFor(100)
  .deleteChars(20)
  .start();
