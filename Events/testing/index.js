
const listeners = {} // Master object

function addListener(eventName, fn) {
    listeners[eventName] = listeners[eventName] || [];
    listeners[eventName].push(fn);
    return listeners;
}

function on(eventName, fn) {
    return addListener(eventName, fn);
}

function WhoAmI() {
    return 'Saapta'
}

function profession() {
    return 'Tech developer'
}

console.log(on('foo', WhoAmI));

console.log(on('foo', profession));