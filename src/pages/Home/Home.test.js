import { render } from "test-utils"
import Home from "."


describe('testing home page', () => {
    test('testing', () => {
        render(<Home/>)
        expect(true).toBeTruthy()
    })
})