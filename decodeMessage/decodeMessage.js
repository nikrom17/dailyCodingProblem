function decode(msg, i=0) {

    if (i >= msg.length - 1) {
        return 1;
    }
    const num = msg.substring(i, i + 2);
    if (parseInt(num, 10) > 26) {
        return decode(msg, i + 1)
    } else {
        return decode(msg, i + 1) + decode(msg, i + 2);
    }
}

console.log(decode('111'));
console.log(decode('1114'));
console.log(decode('12221341123'));