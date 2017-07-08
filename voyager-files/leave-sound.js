AFRAME.registerComponent('leave-sound', {
    init: function () {
        this.el.addEventListener('mouseleave', function (evt) {
            console.log('I was clicked at: ', evt.detail.intersection.point);
          this.components.sound.pauseSound();
        });
    },
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {}
});

