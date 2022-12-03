function func(...args) {
    if (args.length > 0) {
        return Promise.resolve(args);
    } else {
        return Promise.reject('Error');
    }
}
func().catch(error => console.log(error));
func(1,2,3).then(res => console.log(res));
func('value', 15, {}).then(res => console.log(res));