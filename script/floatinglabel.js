const handleFloatingLabel = e => {
    let input = e.target;
    let label = e.target.nextElementSibling;
    if(input.value){
        label.classList.add('is-floating');
    }else{
        label.classList.remove('is-floating');
    }
}
const enableListeners = () => {
    let labels = document.querySelectorAll('.c-form-field--floating input')
    for(let label of labels){
        label.addEventListener('blur', handleFloatingLabel)
    }
}
document.addEventListener('DOMContentLoaded', function() {
    enableListeners();
    
});