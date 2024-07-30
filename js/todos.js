// Correct way to get the element by ID (no '#' in the ID)
const formOpener = document.getElementById('formopener');

// Correct way to assign an event handler
formOpener.onclick = () => {
    alert('This is a todo project');
};
console.log('jell')