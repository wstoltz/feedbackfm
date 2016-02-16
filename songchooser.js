if (Meteor.isClient) {

function playSomeSound(genre) {
  SC.get('/tracks', {
    genre: genre,
    bpm: {
      from: 100
    }
  },
  function(tracks){
    var random=Math.floor(Math.random()*49);
    SC.oEmbed(tracks[random].uri,{auto_play:true}, document.getElementById('target'));
  }
);
};

window.onload = function() {
  SC.initialize({
    client_id: '491c64b7a0867999387ebdd567134a4e'
  });

  var menuLinks = document.getElementsByClassName('genre');
  for (var i = 0; i < menuLinks.length; i++) {
    var menuLink = menuLinks[i]
    menuLinks[i].onclick = function(e) {
      e.preventDefault();
      playSomeSound(menuLink.innerHTML);
    };
  }
};
}