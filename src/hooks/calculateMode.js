const calculateMode = (data) => {
    const modes = []
    const count = []
    let i
    let number
    let maxIndex = 0;

    for (i = 0; i < data.length; i += 1) {
        number = data[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }

    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }

    return modes;
}

export default calculateMode
