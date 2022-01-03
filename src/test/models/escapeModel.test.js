const path = require('path')
const EscapeModel = require(path.resolve(__dirname, '..', '..', 'models', 'escapeModel'))

test('EscapeModel', () => {
    expect(EscapeModel('<')).toBe('&lt;')
    expect(EscapeModel('>')).toBe('&gt;')
    expect(EscapeModel('"')).toBe('&quot;')
    expect(EscapeModel("'")).toBe('&apos;')
})