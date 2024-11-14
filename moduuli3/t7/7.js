function change_picture(id, picture) {
  const target = document.querySelector(`#${id}`);
  target.src = picture;
  return target;
}

const trigger = document.querySelector('#trigger');

trigger.addEventListener('mouseover', function() {
  change_picture('target', 'img/picB.jpg');
});
trigger.addEventListener('mouseout', function() {
  change_picture('target', 'img/picA.jpg');
});