const helloword = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('hello word 1'), 3000)
        : reject(new Error('test error'))
    })
};

const helloAsync = async () => {
    const hello = await helloword();
    console.log(hello)
}

helloAsync();


const anotherfunction = async ()  => {
    try {
        const hello = await helloword();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }

}

anotherfunction();