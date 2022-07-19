const feedBack = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <form >
                <label for="fname">Name: </label>
                <input type="text" id="fname" name="fname" /><br /><br />
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" /><br /><br />
                <label for="message">Message:</label>
                <textarea type="text" id="message" name="message" /><br /><br />
                <input type="button" value="Send" />
            </form>
        </div>
    )
}

export default feedBack;