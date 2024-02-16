// get json data for matching
// TODO: import from separate JSON file
let data = JSON.parse('{"key1": "value1","key2": "value2"}');

function init() {
    // call lookup function when user types in field
    document.querySelector('#key').addEventListener('input', () => lookup(document.querySelector("#key").value))
}

function lookup(key) {
    console.log('LOOKING IT UP!' + ' Key: ' + key);
    // look up the value associated with the typed key
    // TODO: sanitize input data (make case insensitive)
    // TODO: add dropdown to select model
    document.querySelector('#ui').textContent = data[key];
}

init();
