import uniqid from 'uniqid';

const tasks = []

for (let i = 0; i < 28; i++) {
    tasks.push(
    {
        id: uniqid(),
        task: `task ${i}`
    })
}

export default tasks