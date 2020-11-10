export const dateFormat = (date) => {
    const spliting = date.split(' ')
    const dateFormating = spliting[0].split('-')
    const result = dateFormating[1] + '-' + dateFormating[2]

    return result
}