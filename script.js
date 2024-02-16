// get json data for matching
// TODO: import from separate JSON file
let data = JSON.parse('{"Dell Latitude 7740": "5TF10","thing2": "value2"}');

function init() {
    // call lookup function when user types in field
    input = document.querySelector('#key');
    input.addEventListener('input', () => lookup(document.querySelector("#key").value))
    // reset and select field on page load
    input.value = '';
    input.focus();
    // append keys as list of options
    for (let key in data) {
        let option = document.createElement('option');
        option.value = key;
        document.querySelector('#keyslist').appendChild(option);
    }
    
}

function lookup(key) {
    console.log('LOOKING IT UP!' + ' Key: ' + key);
    // look up the value associated with the typed key
    // TODO: sanitize input data (make case insensitive)
    document.querySelector('#ui').textContent = data[key];
}

init();
