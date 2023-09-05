import assert from "assert"
import { SelectionBufferSparse } from "../src"

describe("Selection buffer (sparse) tests", () => {
    it("correctly skips items", async () => {
        const buffer = new SelectionBufferSparse<number>()
        buffer.add(1)
        buffer.add(2)
        buffer.add(3)
        buffer.delete(2)

        const bsi = await buffer

        console.log(bsi)

        assert.equal(bsi[0], 1)
        assert.strictEqual(bsi[1], undefined)
        assert.equal(bsi[2], 3)
    })
})