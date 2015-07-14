var myGame = {
  config : {
      lives: 3,
      speed : 0.3,

      actionButton: 'leftmouse',
      endTrigger : 'Trigger.End',
      screenImages : [
        {
          src:'/images/start.png',
          id : 'mainScreen'
        },
        {
          src : '/images/lose.png',
          id : 'loseScreen'
        },
        {
          src : '/images/win.png',
          id : 'winScreen'
        }
      ],
      livesImage : {
        src : '/images/heart.png',
        dX:0,
        dY:10,
        dWidth:30,
        dHeight:30
      },
      cameraSettings : {
        offset : {
          x : 5,
          y : 0,
          z : -25
        },
        rotation : {
          x: 0,
          y: 0,
          z: 0
        }
      }
  },

  scripts : function(){
    //TODO this is where you can add your own game logic
  }
};

function start(){
    myGame.game = new A3D.Game.Scroller(myGame.config);
    myGame.game.loadScene('/scenes/','firstgame.babylon',myGame.scripts);
}

document.addEventListener( "DOMContentLoaded", start, false );
