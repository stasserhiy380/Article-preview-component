const isTablet = window.matchMedia('(min-width: 768px)').matches;
const isDesktop = window.matchMedia('(min-width: 1100px)').matches;
const tabletMedia = window.matchMedia('(min-width: 768px)');
const desktopMedia = window.matchMedia('(min-width: 1100px)');



function updateLayout(){
    if (desktopMedia.matches) {

        let share_id = document.getElementById('share-id');

        share_id.onclick = () => {
            let list_links = document.getElementById('list-desktop');

            list_links.classList.toggle('active');
        }
    } else if (tabletMedia.matches) {

    } else {

        let share_id = document.getElementById('share-id');
        let share_close = document.getElementById('share-close');

        share_id.onclick = () => {

            let profile = document.getElementById('profile-id');
            let list = document.getElementById('list-id');

            profile.classList.toggle('hidden');
            list.classList.toggle('hidden');

        }

        share_close.onclick = () => {

            let profile = document.getElementById('profile-id');
            let list = document.getElementById('list-id');

            profile.classList.toggle('hidden');
            list.classList.toggle('hidden');
        }

    }}

tabletMedia.addEventListener("change",updateLayout);
tabletMedia.addEventListener('change', updateLayout);

updateLayout();
if (isDesktop)
{

}
else if (isTablet){
    alert("Tablet");
}
else
{


}