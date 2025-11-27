document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('logoTrack');
  if (track && track.parentElement) {
    const clone1 = track.cloneNode(true);
    const clone2 = track.cloneNode(true);
    clone1.removeAttribute('id');
    clone2.removeAttribute('id');
    track.parentElement.appendChild(clone1);
    track.parentElement.appendChild(clone2);
  }

});
