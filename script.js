const refs = {
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]')
};


const timer = {
    intervalId: null,
    start() {
        const startTime = Date.now();

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const { days, hours, mins, secs } = getTimeComponents(deltaTime);
            console.log(`${days}:${hours}:${mins}:${secs}`);
        }, 1000);
    }
};

timer.start();



function updateClock({ days, hours, mins, secs }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
}


function pad(value) {
    return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
}

