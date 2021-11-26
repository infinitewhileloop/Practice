// https://edabit.com/challenge/uNzzNQPDQferAAGMc

function reverseImage(image) {
	
    return image.map(row => {
        return row.map(cell => {
            return cell === 0 ? 1 : 0;
        });
    });
}
