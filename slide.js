var app= angular.module('app', ['ui.bootstrap']);
function CarouselDemoCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'assets/img/pic1.jpg',
      description:"It's just a job. Grass grows, birds fly, waves pound the sand. I beat people up."
    },
    {
      image: 'assets/img/pic2.jpg',
      description:'Float like a butterfly, sting like a bee.'
    },
    {
      image: 'assets/img/pic3.jpg',
      description:'I am the greatest, I said that even before I knew I was.'
    },
    {
      image: 'assets/img/pic4.jpg',
      description:"Silence is golden when you can't think of a good answer."
    }
  ];
}