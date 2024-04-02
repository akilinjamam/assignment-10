const extractTextFromHTML = (value) => {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = value;

    return tempElement.textContent || tempElement.innerText || ''
}

export default extractTextFromHTML;