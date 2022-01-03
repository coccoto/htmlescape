module.exports = (source) => {
    const escape = () => {
        console.log(source)
        return source
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;')
    }

    const main = () => {
        return escape()
    }
    return main()
}