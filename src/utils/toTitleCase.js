/**
 *  @copyright 2025 anshika
 *  @license Apache-2.0
 */

export default function toTitleCase(text) {
    return text
        .split(' ')
        .map((i) => i.replace(i[0], i[0].toUpperCase()))
        .join(' ');
}