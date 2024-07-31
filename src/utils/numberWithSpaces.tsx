export function numberWithSpaces(value: string, pattern: string) {
    var i = 0,
        phone = value.toString();
    return pattern.replace(/#/g, (_) => phone[i++]);
}
