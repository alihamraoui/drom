function horloge (){

    var decalage = [0, 3, -5, -5, -4];
    var drom = ["Metropole", "Reunion", "Guadeloupe", "Martinique", "Guyane"];
    var date = new Date();
    var out = ""

    for (let pas = 0; pas < 5; pas++) {

        var heure = (date.getHours() + decalage[pas])%24;
        if(heure < 0){
          heure = 24 + heure;
        }
        var minute = date.getMinutes() ;
        var seconde = date.getSeconds() ;

        if(heure < 10){  heure = '0' + heure; }
        if(minute < 10){  minute = '0' + minute; }
        if(seconde < 10){  seconde = '0' + seconde; }

        if (seconde%2 == 0) {
          out += '<div class = cadran>'+ drom[pas] +':<br>'+ heure +':'+ minute +':'+ seconde + '</div>' ;
        }
        else{
          out += '<div class = cadran>'+ drom[pas] +':<br>'+ heure +' '+ minute +' '+ seconde + '</div>' ;
        }


        var heure = (date.getHours() + decalage[pas])%24;
        var minute = date.getMinutes() ;
        var seconde = date.getSeconds() ;

    }
    out += ""
    document.getElementById('horloge').innerHTML = out
    setTimeout('horloge()', 1000)

    }


  function evaluation(){
  var count = 0;

  if (document.quizz.date.value == "1946"){
      count = count + 1;
      document.getElementById('q1').innerHTML = "<div style = 'color : green'>Bonne réponse !  </div>";
  } else if (document.quizz.date.value == "1515"){
      document.getElementById('q1').innerHTML = "<div style = 'color : red'> Faux la bonne réponse était 1946.<br> En 1515 a eu lieu la bataille de marignan </div>" ;
  }  else if (document.quizz.date.value == "1789"){
      document.getElementById('q1').innerHTML = "<div style = 'color : red'> Faux la bonne réponse était 1946.<br> en 1789 a eu lieu la révolution française </div>" ;
  } else if (document.quizz.date.value == "1848"){
      document.getElementById('q1').innerHTML = "<div style = 'color : red'> Faux la bonne réponse était 1946.<br> en 1848 à eu lieu l'abolition de l'esclavage' </div>" ;
  }



  if (document.quizz.departement[0].checked && document.quizz.departement[3].checked) {
          count += 1;
          document.getElementById('q2').innerHTML = "<div style = 'color : green'> Bravo vouas avez bien répondu </div>";
      }
  else{
          var  q2 = "<div style = 'color : red'> Les bonne réponse étaient la martinique et mayotte <br>";
          q2 += "L'auvergne est une ancienne région du centre de la france<br>";
          q2 += "La nouvelle calédonie est une collectivité d'outre mer mais ce n'est pas un département</div>";
          document.getElementById('q2').innerHTML = q2;
  }

  if (document.quizz.ocean.value == "a") {
      count += 1;
      document.getElementById('q3').innerHTML = "<div style = 'color : green'> Well done! vous avez eu 1 point </div>";
      }
  else{
    document.getElementById('q3').innerHTML = "<div style = 'color : red'> La guadeloupe se situe dans l'ocean Atlantique</div>";
  }

  if (document.quizz.fournaise.value == "F"){
      count = count + 1;
      document.getElementById('q4').innerHTML = "<div style = 'color : green'> Effectivement le piton de la fournaise se situe à la réunion !</div>" ;
  } else{
      document.getElementById('q4').innerHTML = "<div style = 'color : red'> vous vous êtes trompé le piton de la fournaise se situe à la réunion</div>" ;
  }

  if (document.quizz.matoutou.value == "Martinique" || document.quizz.matoutou.value == "martinique"){
      count = count + 1;
      document.getElementById('q5').innerHTML = "<div style = 'color : green'> vous êtes un amateur de migales martiniquaises !<br>" ;
  } else if (document.quizz.matoutou.value == ""){
      document.getElementById('q5').innerHTML = "" ;
  } else{
    document.getElementById('q5').innerHTML =  "<div style = 'color : red'> les matoutou vivent en martinique vous devez relire notre site. </div>"
  }
document.getElementById('quiz2z').innerHTML ="vous avez eu <b>" + count + "</b> bonnes réponses";


}

function reunion(){

          document.getElementById('localisation').innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476345.63600094116!2d55.24710461471844!3d-21.134471500571298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2178778110b8e43b%3A0x4a7f8e89ecdbeaf9!2zUsOpdW5pb24!5e0!3m2!1sen!2sfr!4v1616335168507!5m2!1sen!2sfr" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
}

function guadeloupe(){

          document.getElementById('localisation').innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d981084.9451397206!2d-61.95756999157104!3d16.15021672531781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0e755a77287d51%3A0xecbe3e37b74a07ab!2sGuadeloupe!5e0!3m2!1sen!2sfr!4v1616334503848!5m2!1sen!2sfr" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
}

function martinique(){

          document.getElementById('localisation').innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494128.12506536016!2d-61.29397993982723!3d14.63458655452622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c6aa0f90066070d%3A0xe1001b1217afe7b0!2sMartinique!5e0!3m2!1sen!2sfr!4v1616334879755!5m2!1sen!2sfr" width=500" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
}

function guyane(){

          document.getElementById('localisation').innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4075449.631168071!2d-55.33067869036149!3d4.034446295213996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d12155785f7d753%3A0xde27f7e90f0af446!2sFrench%20Guiana!5e0!3m2!1sen!2sfr!4v1616335110208!5m2!1sen!2sfr" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
}

function mayotte(){

          document.getElementById('localisation').innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497994.2793253343!2d44.87557869705536!3d-12.805732064036375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x220a0e33dcf28dbb%3A0xff32176795fe2a4b!2sMayotte!5e0!3m2!1sen!2sfr!4v1616335329168!5m2!1sen!2sfr" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
}